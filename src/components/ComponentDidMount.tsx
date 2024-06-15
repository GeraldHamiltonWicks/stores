import { ReactElement, useEffect } from "react";

export function ComponentDidMount(): ReactElement {
    useEffect(() => {
        console.log('component mounted');
    }, [])

    return <div>
        Component did mount
    </div>
}