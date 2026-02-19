// // 1.JSX:
// // Jasvacript XML: Html convert krti =hai js.
// import { jsx } from "react/jsx-runtime";

// {/* <div>
//     <p>This is a paragraph</p>
//     <h2>Shivam Singh</h2>
// </div> */}

// const LearningJSX = () => {
//   return jsx("div",{children: [jsx("p",{
//     children: "This is a paragraph"}),
//      jsx("h2",{ children: "Shivam Singh"
//   })]
// })
// }

// export default LearningJSX

// 1.2: jsx with css:
import './LearningJSX.css'

const LearningJSX = () => {

  const randomNum =Math.floor(Math.random()*10+1)

  return (
    <article className='person-card'>
      <h1>Name: ashish</h1>
      <h2>Age: 25</h2>
      <p>Crush: Piggy</p>
      <h4>Random Value out of 10:{randomNum}</h4>
    </article>
  )
}

export default LearningJSX