import { ReactElement, useEffect } from "react";

export function ComponentWillUnmount(): ReactElement {
    useEffect(() => {
        const myTimer: NodeJS.Timer = setInterval(() => {
            console.log('clock');
        }, 1000);

        return () => {
            // Cleanup function 
            // Similar to componentWillUnmount
            clearInterval(myTimer);
            console.log('compionent unmounted');
        }
    })

    return <div>
        Component Will Mount
    </div>
}