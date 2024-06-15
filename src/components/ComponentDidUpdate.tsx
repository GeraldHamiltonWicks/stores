import { ReactElement, useEffect, useState } from "react";

export function ComponentDidUpdate(): ReactElement {
    const [count, setCount] = useState(() => 0);

    useEffect(() => {
        // This is invoked immediately after rerender
        // similar to componentDidUpdate
        console.log('Component updated');
    });

    function addOne(): void {
        setCount((count) => count + 1);
    }

    function subtractOne(): void {
        setCount((count) => count - 1);
    }

    return <div>
        Component Did Update | Count {count}
        <button onClick={addOne}>+</button>
        <button onClick={subtractOne}>-</button>
    </div>
}