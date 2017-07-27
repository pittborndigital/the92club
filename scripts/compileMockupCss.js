const fs = require('fs')
const stylus = require('stylus')
const Finder = require('fs-finder')
const path = require('path')

// Define input filename and output filename
const styleInputGlobal = path.join(__dirname, '../mockups/source/css')
const styleInputPatterns = path.join(__dirname, '../mockups/source/_patterns')
const styleOutputFilename = 'style.css'
const styleOutput = path.join(__dirname, `../mockups/source/css/${styleOutputFilename}`)

function getStylusFilesAsString(...directories) {
  let styl = ''
  directories.forEach((directory) => {
    const paths = Finder.from(directory).find('.styl')
    paths.forEach((p) => {
      const file = fs.readFileSync(p)
      styl += `${file}\n`
    })
  })
  return styl
}

function getFile(file) {
  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(path.dirname(dir))
  }
  return fs.openSync(file, 'w')
}

function buildStyles(input, output) {
  stylus(input).render((err, css) => {
    if (err) throw err
    let existingCss
    if (fs.existsSync(output)) {
      existingCss = fs.readFileSync(output).toString()
    }
    if (existingCss !== css) {
      fs.writeFile(getFile(output), css, (innerErr) => {
        if (innerErr) throw innerErr
        console.log('👍 Stylesheet built successfully.')
      })
    }
  })
}

// Build stylesheet
buildStyles(getStylusFilesAsString(styleInputGlobal, styleInputPatterns), styleOutput)
