const heading = React.createElement("h1", null, "Diwaker Pandey");

const button = React.createElement(
  "button",
  {
    onClick: () => alert("Hello Diwaker Pandey!"),
  },
  "Click Me"
);

const container = React.createElement("div", null, heading, button);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);