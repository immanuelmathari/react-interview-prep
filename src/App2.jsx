// 29.08.25
// mylearning | react | ToDo | Note
// useBoolean() is an official react hook, but a custom hook that manages a boolean value with some helpwer functions eg toggle, setTrue, setFalse
import { useCallback, useState } from "react"
import Logo from "./Logo";


// my-learning | Note
// the [] is called the dependancy array. it tells react to rerun or recreate the function
// Only create this function once — on the first render — and never recreate it again.
// if you leave it out, then React will recreate setTrue on every render, which can cause unnecessary re-renders of child components that depend on it.
// If your callback depends on other variables:
// const setTo = useCallback(() => setValue(count + 1), [count]);
// Now React will recreate setTo whenever count changes.

export function useBoolean(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    // this in logical truth is called negation
    // so you say, cost toggle is equal to a useCallback with an arrow function init and setValue which has another arrow function whose parenthesis is prev and the inner function (with no curly brackets) is the negation of prev then close it, comma then the dependancy array
    const toggle = useCallback(() => setValue((prev) => !prev), []);

    return { value, setTrue, setFalse, toggle };
}

export default function App2() {
    const isOpen = useBoolean(false);

    return (
        <>
            <Logo />
            <p>Is Open? {isOpen.value ? "Yes it is" : "No it is not"}</p>
            <button onClick={isOpen.setTrue} style={{ backgroundColor: "green" }}>Set True</button>
            <button onClick={isOpen.setFalse} style={{ backgroundColor: "red" }}>Set False</button>
            <button onClick={isOpen.toggle} style={{ backgroundColor: "midnightblue" }}>Toggle</button>
        </>
    );
}