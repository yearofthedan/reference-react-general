import React from "react";
import PropTypes from "prop-types";

const LabelledField = ({ id, type, value, onChange, children }) => (
    <>
        <label htmlFor={id}>
            {children}
        </label>
        <input type={type} value={value} onChange={onChange} id={id} />
    </>
);

LabelledField.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string
};

LabelledField.defaultValues = {
    type: 'text'
};

export default LabelledField;

