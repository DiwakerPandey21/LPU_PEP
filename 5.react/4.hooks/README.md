# Hooks:

Hooks are special functions in React that let functional components to use features like state, lifecycle, and performance optimization - without writing class components

-> Before Hooks only class components can use state and lifecycle.

-> After Hooks functional components can do everything 

-> IMPORTANT Rules: (Hooks)

1) Hooks can be called at the top level: Not inside loop, conditional statement or nested function
2) Hooks are called inside React components or custom hooks
3) Hooks name must start with 'use'

# useState:
Its is a hook which we use to store and update state in functional components.

const[count,setCount]= useState(0);

0 -> intital value(useState hook ki)
count-> variable Name
setCount-> function

# useEffect:(side effect)
It is a hook which is used in React functional components to perform side effect to your components.

What short of side effect:
1) API calls
2) Timers
3) Event Listener
4) DOM manipulation

* IMP POINT:
useEffect is called after the component render and each update.

# useEffect Hook:

Basic:
useEffect(()=>{
    // side effect:

    return ()=>{

        //cleanups;

    }
},[dependencies])

[]: dependency array
1)[] -> once on mount
2)[value] -> when change value
3) none -> every render

* we are getting 2 output in the console logs bcz of lifecycle methods

# UseRef hook: (stores value without re-render or access DOM)
It is a hook that provides a mutable object called a Ref object. This object has a current property  that can be used to hold a mutable references to value.

IMP POINT:
-> State changes with Ref object don't trigger a re-render of the components
-> Changes dont re-render

# useReducer Hook: (decide how state management hook)
It is a state management hook which is useful when you want to have a complex state logic that involves multiple sub-values or next state is dependent on the previous state.

It take 2 things:
* reducer function (logic)
* dispatch(UI actions)

IMP POINT:
-> It is an ulternative  to useState and is often preferable when dealing with more intricate state management


# useContext:
