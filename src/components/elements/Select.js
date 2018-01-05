import React from "react";

const Select = props => {
	const { options, value, ...restOfProps } = props;
	const optionElements = options.map(option => (
		<option key={option} value={option}>
			{option}
		</option>
	));

	return (
		<select className="form-control" {...restOfProps}>
			<option key={value} value={value}>
				{value}
			</option>
			{optionElements}
		</select>
	);
};

export default Select;
