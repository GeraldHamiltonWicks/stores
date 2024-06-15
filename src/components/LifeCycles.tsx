import { ReactElement, useEffect } from "react";

export function LifeCycles(): ReactElement {
    // Equivalent to the componentDidMount() method runs after the component output 
    // has been rendered to the DOM. This is a good place to set up a timer:
    useEffect(() => {
        console.log('Has rendered !');
    }, []);

    useEffect(() => {
        const myTimer: NodeJS.Timer = setInterval(() => {
            console.log('clock');
        }, 1000)

        return () => {
            // Cleanup function (similar to componentWillUnmount)
            // In a React class component, the componentWillUnmount() method is a lifecycle method that 
            // is invoked immediately before a component is destroyed or unmounted from the DOM.
            clearInterval(myTimer);
        }
    })

    useEffect(() => {
        // Code to run on update (similar to componentDidUpdate)
        // componentDidUpdate: This method is invoked immediately after updating occurs. It is not called for the initial render.
        // This is where you can operate on the DOM when the component has been updated.
        console.log('Component updated');
    
        // Optionally, you can specify dependencies to control when this runs
      });

    
    return <div className="life-cycles">
        Life Cycles
    </div>
}