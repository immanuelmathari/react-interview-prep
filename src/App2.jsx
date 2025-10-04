// 29.08.25
// mylearning | react | ToDo | Note
// useBoolean() is an official react hook, but a custom hook that manages a boolean value with some helpwer functions eg toggle, setTrue, setFalse
import { useCallback, useState } from "react"
import Logo from "./Logo";



export function useBoolean(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
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