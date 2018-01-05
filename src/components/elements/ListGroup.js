import React from "react";

const ListGroup = props => {
	const { base, currencies, data, date, isFetching } = props;

	if (isFetching) {
		return <div> LOADING... </div>;
	}

	if (!isFetching && !currencies) {
		return <div> NOTHING FOUND... </div>;
	}

	const listElements = data.map(rate => (
		<li className="list-group-item" key={rate}>
			{rate}
		</li>
	));

	return (
		<div>
			<h2>
				Exchange rate from {date} with base Currency {base}
			</h2>
			<ul className="list-group">{listElements}</ul>
		</div>
	);
};

export default ListGroup;
