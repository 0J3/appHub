const settings = {
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
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "apphub",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [process.platform == "darwin" ? "darwin" : "win32", "linux"],
    },
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

module.exports = settings;
