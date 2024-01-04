const car = {
  company: "BMW",
  type: "z2",
};

module.exports = car;

// npm init  to initialise our project as package

                         // files

const fs = require("fs");

 function readFile(path) {
  return new Promise( (resolve, reject) => {
    try {
      let data =  fs.readFileSync(path, "utf8");
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

async function getFileData() {
  try {
    let data = await readFile("test.txt");
    console.log(data);

    fs.stat("test.txt", (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log(stats.isFile());
    });
  } catch (error) {
      console.log(error)
  }
}
getFileData()


