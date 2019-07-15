import React, {useState} from "react";
import CatsForm from "./catsForm/CatsForm";

const SignUpFlow = () => {
    const [catsData, setCatsData] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    const handleSetCatsData = data => {
        setCatsData(data);
        setSubmitted(true);
    };

    return isSubmitted
        ? <div>All done. You ordered {catsData.cats} cats</div>
        : <CatsForm onComplete={handleSetCatsData} />
};

export default SignUpFlow;
