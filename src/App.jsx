import React, {useContext, useState} from "react";
import {ProfileContext} from "./profileProvider/ProfileProvider";

const App = () => {
    const profile = useContext(ProfileContext);
    const [number, setNumber] = useState(7);

    const handleSetNumber = () => {
        setNumber(10);
    };

    return (
        <>
            <p>Current number is {number}</p>
            <button type="button" onClick={handleSetNumber}>Set new number</button>
            {
                profile
                    ? <p>Current email is {profile && profile.email}</p>
                    : <p>No profile loaded</p>
            }
        </>
    );
};

export default App;
