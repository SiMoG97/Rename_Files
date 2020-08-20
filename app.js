const yargs = require("yargs");
const { renameHandler } = require("./renameHandler");

yargs.command({
  command: "rename_files",
  describe: "command that change files name to a chosen one",
  builder: {
    newName: {
      describe: "rename input",
      demandOption: true,
      type: String,
    },
    dirPath: {
      describe: "path to the directory which has files in it",
      demandOption: true,
      type: String,
    },
    ext: {
      describe: "files extension",
      demandOption: true,
      type: String,
    },
  },
  handler: ({ newName, dirPath, ext }) => renameHandler(newName, dirPath, ext),
});

yargs.parse();
