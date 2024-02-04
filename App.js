// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "HElloworld welcome herer"
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", { id: "child" }, "i am h1"),
    React.createElement("div", { id: "child" }, "i am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", { id: "child" }, "i am h1"),
    React.createElement("div", { id: "child" }, "i am h2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//ReactDOM.render(heading, document.getElementById("root"));
