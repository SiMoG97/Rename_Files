const fs = require("fs");
const path = require("path");

const renameHandler = (newName, dirPath, ext) => {
  if (ext[0] !== ".") {
    ext = `.${ext}`;
  }
  try {
    fs.readdirSync(dirPath)
      .filter((file) => {
        return path.extname(file) === ext;
      })
      .forEach((file, i) => {
        fs.rename(
          `${dirPath}\\${file}`,
          `${dirPath}\\${newName} ${i + 1}${ext}`,
          (err) => {
            if (err) throw err;
            console.log("Files renamed successfully");
          }
        );
      });
  } catch (e) {
    console.log("no such file or directory");
  }
};

module.exports = {
  renameHandler,
};
