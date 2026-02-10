// 1.JSX:
// Jasvacript XML: Html convert krti =hai js.
import { jsx } from "react/jsx-runtime";

{/* <div>
    <p>This is a paragraph</p>
    <h2>Shivam Singh</h2>
</div> */}

const LearningJSX = () => {
  return jsx("div",{children: [jsx("p",{
    children: "This is a paragraph"}),
     jsx("h2",{ children: "Shivam Singh"
  })]
})
}

export default LearningJSX