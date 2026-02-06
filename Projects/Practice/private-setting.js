function createSettings() {
  let settings = { theme: "light", fontSize: 14 };

  return {
    getSetting: function (key) {
      return settings[key];
    },
    updateSetting: function (key, value) {
      settings[key] = value;
    }
  };
}

let appSettings = createSettings();
console.log(appSettings.getSetting("theme"));

appSettings.updateSetting("theme", "dark");
console.log(appSettings.getSetting("theme"));