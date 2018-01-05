import React from "react";
import InputGroup from "./InputGroup";
import Select from "./Select";

const Form = ({ currencyOptions, onChange, baseCurrency }) => {
	return (
		<form>
			<h3>form</h3>
			<InputGroup name="currencyselect" labelText="Select a Base Currency">
				<Select
					name="currencyselect"
					options={currencyOptions}
					value={baseCurrency}
					onChange={onChange}
				/>
			</InputGroup>
		</form>
	);
};

export default Form;
