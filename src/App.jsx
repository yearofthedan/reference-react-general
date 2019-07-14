import React, {useState} from "react";

const App = () => {
    const [number, setNumber] = useState(7);

    const handleSetNumber = () => {
        setNumber(10);
    };

    return (
        <>
            <p>Current number is {number}</p>
            <button type="button" onClick={handleSetNumber}>Set new number</button>
        </>
    );
};

export default App;
