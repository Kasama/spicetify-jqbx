// Run "npm i @type/react" to have this type package available in workspace
/// <reference types="react" />

/** @type {React} */
const react = Spicetify.React;

// Define a function called "render" to specify app entry point
// mount JQBX iframe inside a section
function render() {
  return react.createElement("section", null, [
    react.createElement("iframe", {
      className: "jqbx",
      src: "https://app.jqbx.fm/rooms",
      frameborder: "0",
      sandbox:
        "allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation allow-popups-to-escape-sandbox",
      style: { width: "100%", height: "80vh" },
    }),
  ]);
}
