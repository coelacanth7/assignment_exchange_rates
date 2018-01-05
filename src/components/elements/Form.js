import React from "react";
import InputGroup from "./InputGroup";
import Select from "./Select";
import Input from "./Input";

const Form = ({ currencyOptions, onChange, baseCurrency }) => {
	return (
		<form>
			<h3>form</h3>
			<InputGroup name="base" labelText="Select a Base Currency">
				<Select
					name="base"
					options={currencyOptions}
					value={baseCurrency}
					onChange={onChange}
				/>
			</InputGroup>
			<InputGroup>
				<Input name="date" type="date" />
			</InputGroup>
		</form>
	);
};

export default Form;
