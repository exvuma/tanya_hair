const path = require('path')
const readFile = require('util').promisify(require('fs').readFile)
const writeFile = require('util').promisify(require('fs').writeFile)

const workerPath = path.join(process.cwd(), process.argv[2])
const clientPath = path.join(process.cwd(), process.argv[3])

main()

async function main() {
  const workerContents = (await readFile(workerPath)).toString()
  const scriptContents = (await readFile(clientPath)).toString()
  // console.log(JSON.stringify(scriptContents))
  const updatedWorkerContents = workerContents
    .replace(/('|")\{CLIENT_BUILD_CONTENTS\}('|")/, JSON.stringify(scriptContents))
  await writeFile(workerPath, updatedWorkerContents)
}