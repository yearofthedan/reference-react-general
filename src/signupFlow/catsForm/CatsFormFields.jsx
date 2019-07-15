import PropTypes from "prop-types";
import React from "react";
import LabelledField from "../../common/components/LabelledField";

const CatsFormFields = ({fields, handleInput}) => (
    <fieldset>
        <LabelledField
            onChange={handleInput}
            id="income"
            value={fields.income.value}
        >
            Enter your income
        </LabelledField>
        <LabelledField
            onChange={handleInput}
            id="cats"
            value={fields.cats.value}
            type="number"
        >
            How many cats exactly?
        </LabelledField>
    </fieldset>
);

CatsFormFields.propTypes = {
    fields: PropTypes.shape({
        cats: PropTypes.shape({ value: PropTypes.string }),
        income: PropTypes.shape({ value: PropTypes.string }),
    }).isRequired,
    handleInput: PropTypes.func.isRequired
};

export default CatsFormFields;
