import { parse } from "url"
import toMarkdown from "to-markdown"
import makeFetchHappen from "make-fetch-happen"
import cheerio from "cheerio"
const fetch = makeFetchHappen.defaults({
  cacheManager: ".cache/", // path where cache will be written (and read)
})

const KlassName = process.argv[2]

const fetchAndLoad = url =>
  fetch(url)
    .then(response => response.text())
    .then(html => cheerio.load(html))

fetchAndLoad(
  "https://developers.google.com/maps/documentation/javascript/reference/"
)
  .then($ =>
    $(`#${KlassName}`)
      .find("a")
      .attr("href")
  )
  .then(classUrl => fetchAndLoad(classUrl))
  .then($ => {
    const $content = $(`#${KlassName}`).parent()
    return contentToJS(KlassName, $, $content)
  })
  .then(it => process.stdout.write(JSON.stringify(it)))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

function contentToJS(KlassName, $, $content) {
  const constructor = $content
    .find(`#${KlassName}`)
    .next()
    .find("code")
    .text()

  const $constructorTable = $content.find(
    `[summary="class ${KlassName} - Constructor"]`
  )
  const [, constructorArgs] = $constructorTable
    .find(`tr > td > div > code`)
    .text()
    .match(/\S+\((.*)\)/)

  const $methodsTable = $content.find(
    `[summary="class ${KlassName} - Methods"]`
  )
  const methods = $methodsTable
    .find("tbody > tr")
    .map((i, tr) => {
      const $td = $(tr).find("td:nth-child(2)")

      const [, name] = $td
        .find("div:first-child")
        .text()
        .replace("\n", "")
        .match(/(\S+)\(.*\)/)

      const args = $td
        .find("div:nth-child(2) > ul > li")
        .text()
        .replace(/\s/g, "")
      const returnValue = $td.find("div:nth-child(3) > code").text()
      const returnsDesc = toMarkdown($td.find("div:nth-child(4)").html())

      /**
       * format here is:
       * name: "{function name}" - without ()
       * args: "{arg name}:{arg type}" - only one arg supported ?
       * returns: "{return type}"
       * returnsDesc: "{function desc}"
       */
      return {
        name,
        args,
        returns: returnValue,
        returnsDesc,
      }
    })
    .get()

  const $eventsTable = $content.find(`[summary="class ${KlassName} - Events"]`)
  const events = $eventsTable
    .find("tbody > tr")
    .map((i, tr) => {
      const $tr = $(tr)
      const name = $tr.find("td:first-child").text()
      const args = $tr
        .find("td:nth-child(2) > div:nth-child(2) > ul > li")
        .text()
        .replace(/\s/g, "")
      const returnsDesc = toMarkdown(
        $tr.find("td:nth-child(2) > div:nth-child(3)").text()
      )

      /**
       * format here is:
       * name: "{evt name}"
       * args: "{arg name}:{arg type}" - only one arg supported ?
       * returnsDesc: "{function desc}"
       */
      return {
        name,
        args,
        returnsDesc,
      }
    })
    .get()

  return {
    constructor: {
      name: constructor,
      args: constructorArgs,
    },
    methods,
    events,
  }
}
