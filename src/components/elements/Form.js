import React from "react";
import InputGroup from "./InputGroup";
import Select from "./Select";

const Form = ({ currencyOptions, onChange, baseCurrency, makeApiRequest }) => {
	//hard code currencies up front
	// const currencyOptions = [
	// 	"AUD",
	// 	"BGN",
	// 	"BRL",
	// 	"CAD",
	// 	"CHF",
	// 	"CNY",
	// 	"CZK",
	// 	"DKK",
	// 	"GBP",
	// 	"HKD",
	// 	"HRK",
	// 	"HUF",
	// 	"IDR",
	// 	"ILS",
	// 	"INR",
	// 	"JPY",
	// 	"KRW",
	// 	"MXN",
	// 	"MYR",
	// 	"NOK",
	// 	"NZD",
	// 	"PHP",
	// 	"PLN",
	// 	"RON",
	// 	"RUB",
	// 	"SEK",
	// 	"SGD",
	// 	"THB",
	// 	"TRY",
	// 	"USD",
	// 	"ZAR"
	// ];

	return (
		<form>
			<h3>form</h3>
			<InputGroup name="currencyselect" labelText="Select a Base Currency">
				<Select
					name="currencyselect"
					options={currencyOptions}
					value={baseCurrency}
					onChange={onChange}
					makeApiRequest={makeApiRequest}
				/>
			</InputGroup>
		</form>
	);
};

export default Form;
