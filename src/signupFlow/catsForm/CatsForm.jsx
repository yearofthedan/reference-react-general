import React, {useReducer} from "react";
import PropTypes from "prop-types";
import fieldReducer, {fieldEntry} from "./fieldReducer";
import CatsFormFields from "./CatsFormFields";
import SubmitButton from "../../common/components/SubmitButton";

const CatsFormHeader = ({children}) => <header><h1>{children}</h1></header>;

const CatsForm = ({onComplete}) => {
    const [state, dispatch] = useReducer(
        fieldReducer,
        { income: fieldEntry(''), cats: fieldEntry('') }
    );

    const handleInput = e => {
        dispatch({
            type: 'UPDATE_FIELD_VALUE',
            data: {
                name: e.target.id,
                value: e.target.value,
            }
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onComplete({
            income: state.income.value,
            cats: state.cats.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <CatsFormHeader>Welcome to sign up</CatsFormHeader>
            <CatsFormFields fields={state} handleInput={handleInput}/>
            <SubmitButton>Order now</SubmitButton>
        </form>
    );
};

CatsForm.propTypes = {
    onComplete: PropTypes.func.isRequired
};

export default CatsForm;
