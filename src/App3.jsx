// 29.09.25
// implement a useCounter hook that manages a counter state, with some additional convenience utility methods

import { useCallback, useState } from "react";
import Logo from "./Logo";

export function useCounter(initialValue = 0)
{
    const [count, setCount] = useState(initialValue);
    
    // to increment
    const childincrement = (initialValue) => {
        // return initialValue = initialValue + 1;
        // return setCount(count + 1);
        return setCount(count + 1);
    }
    // const increment = () => setCount((c) => c + 1);
    const increment = useCallback(() => setCount((c) => c + 1), []);

    // to decrement 
    const childdecrement = (initialValue) => {
        // return initialValue = initialValue - 1;
        return setCount(count - 1);
    }
    const decrement = useCallback(() => setCount((c) => c - 1), []);

    // to reset 
    const childreset = () => {
        // return initialValue = 0;
        return setCount(initialValue);
    }
    const reset = useCallback(() => setCount(initialValue), [initialValue]);

    // NOTE 
    // I forgot this part
    return { count, setCount, increment, decrement, reset};
}

export default function App3()
{
    const count = useCounter(5);
    
    return (
        <>
        <Logo />
        <div>
            <p>Counter : {count.count}</p>
            <button onClick={count.increment} style={{backgroundColor: "forestgreen"}}>Increment</button>
            <button onClick={count.decrement} style={{backgroundColor: "papayawhip"}}>Decrement</button>
            <button onClick={count.reset} style={{backgroundColor: "palegoldenrod"}}>Reset</button>
        </div>
        </>
    )
}