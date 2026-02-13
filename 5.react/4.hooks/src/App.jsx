import React from 'react'
// import LearnEffect from './components/LearnEffect'
// import LearningRef from './components/LearningRef'
// import LearningReduce from './components/LearningReduce'
import Dean from './components/useContext/Props Drilling/Dean'
import Univerity from './components/useContext/Univerity'
import Student from './components/useContext/Student'
import './components/useContext/style.css'
import LearnLayoutEffect from './components/useLayoutEffect/LearnLayoutEffect'
import Parent1 from './components/useCallback/Parent1'

// const App = () => {
//   return (
//     <div>
//       {/* <LearnEffect/> */}
//       {/* <LearningRef/> */}
//       {/* <LearningReduce/> */}
//     </div>
//   )
// }

// // 1.1: props drilling
// const App = () => {

//   const notice = "Tommrow we have a class"

//   return (
//     <div>
//         <h1>This is a University Announcement</h1>
//         <Dean notice={notice}/>
//     </div>
//   )
// }

// // 1.2:useContext: working as a wrapper for data and university component
// const App = () => {

//   return (
//     <Univerity>
//       <Student/>
//     </Univerity>
//   )
// }

// // 2. useLayoutEffect:
// const App = () => {

//   return (
//     <LearnLayoutEffect/>
//   )
// }

// 3. usecallback:
const App = () => {

  return (
    <Parent1/>
  )
}

export default App