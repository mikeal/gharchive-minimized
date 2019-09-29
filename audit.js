const { readdir, unlink, stat } = require('fs').promises

const cwd = process.cwd()

const run = async () => {
  let years = (await readdir(cwd)).filter(s => s.startsWith('20'))
  for (year of years) {
    for (month of await readdir(cwd + '/' + year)) {
      for (let day of await readdir([cwd, year, month].join('/'))) {
        for (let filename of await readdir([cwd, year, month, day].join('/'))) {
          let f = [cwd, year, month, day, filename].join('/')
          if (!filename.endsWith('.br')) await unlink(f)
          else {
            let s = await stat(f)
            if (s.size === 0) {
              await unlink(f)
            }
          }
        }
      }
    }
  }
}

run()
