// // 1.1 creating h1 element:
// // Create element in react take 3 parameters: 1. tag that u want to create, 2. object, attribute(content that u want to put in the tag)
// const heading = React.createElement("h1", { id: "h1" }, "Hey there");
// console.log(heading); // object

// // rendering is the work of  dom but element creation is the work of react
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// {
//   /* <div id="parent">
//   <div id="child">
//     <h1>H1 Tag</h1>
//   </div>
// </div>; */
// }

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "H1 Tag"),
//   ),
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(parent);

{
  /* <div id="parent">
  <div id="child">
    <h1>H1 first Tag</h1>
    <h1>H1 second Tag</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 First Tag"),
    React.createElement("h1", {}, "H1 second Tag"),
  ]),
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
