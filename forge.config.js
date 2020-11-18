const fs = require("fs");
const package = {
  json: require("./package.json"),
};

process.env.GITHUB_TOKEN = require("./.ghPublish.json")[0];

let forge = {
  // plugins: [
  //   [
  //     "@electron-forge/plugin-electronegativity",
  //     {
  //       input: ".",
  //       isSarif: true,
  //       output: "electronegativity.out.txt",
  //     },
  //   ],
  // ],
  packagerConfig: {
    publish: "github",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "apphub",
      },
    },
    // {
    //   name: "@electron-forge/maker-zip",
    //   platforms: [process.platform == "darwin" ? "darwin" : "win32", "linux"],
    // },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    {
      name: "@electron-forge/maker-appx",
      config: {
        containerVirtualization: false,
        inputDirectory: ".\\",
        outputDirectory: ".\\bin\\",
        packageName: "apphub",
        packageDisplayName: "AppHub",
        packageDescription: "AppHub: A cross-platform app for downloading apps",
        devCert: ".\\certificates\\default.pfx",
      },
    },
    {
      name: "@electron-forge/maker-snap",
      config: {
        features: {
          audio: true,
          mpris: "com.example.mpris",
          webgl: true,
        },
        summary: "Pretty Awesome",
      },
    },
  ],
};

// Github Repo
forge.github_repository = forge.github_repository || {};
forge.github_repository.owner = "0J3";
forge.github_repository.name = "appHub";
forge.github_repository.draft = true;
forge.github_repository.prerelease =
  package.json.prerelease ||
  package.json.preRelease ||
  package.json.isPreRelease ||
  package.json.version.includes("-") ||
  false;

module.exports = forge;
