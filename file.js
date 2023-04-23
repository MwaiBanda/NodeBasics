const fs = require('fs')
// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})
// wirting files 
fs.writeFile('./docs/blog2.txt', 'Hello from the file.js', () => {
    console.log('file written')
})

// directories
if (!fs.existsSync("./assets")) {
fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err)
  }

  console.log('folder created')
})
} else {
    fs.rmdir("./assets", (err) => {
      if (err) {
        console.log(err)
      }
      console.log('folder deleted')
    })
}

// delete files
if (fs.existsSync('./docs/blog2.txt')) {
    fs.rmSync('./docs/blog2.txt')
    console.log('file deleted')
}