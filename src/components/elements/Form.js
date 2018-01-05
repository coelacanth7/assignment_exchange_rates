import React from "react";
import InputGroup from "./InputGroup";
import Select from "./Select";
import Input from "./Input";

const Form = ({ onChange, onChangeConverter, ...state }) => {
	const { currencies, base, convertTo, amount, result } = state;
	return (
		<form>
			<h3>form</h3>
			<InputGroup name="base" labelText="Select a Base Currency">
				<Select
					name="base"
					options={currencies}
					value={base}
					onChange={onChange}
				/>
			</InputGroup>
			<InputGroup labelText="Select a historical date">
				<Input name="date" type="date" onChange={onChange} />
			</InputGroup>
			<h3>
				Convert {base} to {convertTo}:
			</h3>
			<InputGroup labelText="Enter Amount">
				<Input name="amount" type="number" onChange={onChangeConverter} />
			</InputGroup>
			<InputGroup name="convertTo" labelText="Select a Currency to convert to">
				<Select
					name="convertTo"
					options={currencies}
					value={convertTo}
					onChange={onChangeConverter}
				/>
			</InputGroup>
			{result ? (
				<h3>
					{amount} {base} is equal to {result} {convertTo}
				</h3>
			) : null}
		</form>
	);
};

export default Form;
