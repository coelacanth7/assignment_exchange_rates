import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import JumbotronFluid from "./elements/JumbotronFluid";
import Form from "./elements/Form";
import ListGroup from "./elements/ListGroup";

class App extends Component {
	constructor() {
		super();
		this.state = {
			currencies: [],
			data: [],
			json: {},
			base: "EUR",
			date: "",
			amount: 0,
			convertTo: "USD",
			result: null,
			isFetching: false,
			error: null
		};
	}

	componentDidMount() {
		this.setState({ isFetching: true });
		this.makeTheFetch("latest");
	}

	makeTheFetch = (date, currency) => {
		let url = `https://api.fixer.io/${date}?base=${currency}`;
		if (!currency) {
			url = `https://api.fixer.io/${date}`;
		}

		fetch(url)
			.then(response => response.json())
			.then(json => {
				let data = Object.keys(json.rates).map(
					el => `${el}: ${json.rates[el]}`
				);

				this.setState({
					currencies: Object.keys(json.rates),
					data: data,
					json: json.rates,
					base: json.base,
					date: json.date,
					isFetching: false
				});
			})
			.catch(error => {
				console.log(error);
				this.setState({
					isFetching: false,
					error
				});
			});
	};

	makeApiRequest = () => {
		const currencyBase = this.state.base;
		const date = this.state.date;
		this.setState({ isFetching: true });
		this.makeTheFetch(date, currencyBase);
	};

	onChange = e => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			// setState is asychronous
			// but in the callback state will be updated
			() => {
				this.makeApiRequest();
			}
		);
	};

	onChangeConverter = e => {
		e.preventDefault();
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				const amount = this.state.amount;
				const convertTo = this.state.json[this.state.convertTo];
				const result = convertTo * amount;
				console.log(amount, convertTo);
				this.setState({
					result
				});
			}
		);
	};

	render() {
		return (
			<div className="App">
				<JumbotronFluid
					heading="Exchange Rate API"
					lead="Using an API for foriegn exhange rates"
				/>
				<Form
					onChange={this.onChange}
					onChangeConverter={this.onChangeConverter}
					{...this.state}
				/>
				<br />
				<br />
				<hr />
				<ListGroup {...this.state} />
			</div>
		);
	}
}

export default App;
