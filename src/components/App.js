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
			base: "EUR",
			date: "",
			isFetching: false,
			error: null
		};
	}

	componentDidMount() {
		this.setState({ isFetching: true });
		// basic api call
		fetch("https://api.fixer.io/latest")
			.then(response => response.json())
			.then(json => {
				let data = Object.keys(json.rates).map(
					el => `${el}: ${json.rates[el]}`
				);

				this.setState({
					currencies: Object.keys(json.rates),
					data: data,
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
	}

	makeApiRequestForCurrency = e => {
		const option = e.target;
		const currencyBase = this.state.base;

		console.log("currencyBase", currencyBase);

		this.setState({ isFetching: true });

		fetch(`https://api.fixer.io/latest?base=${currencyBase}`)
			.then(response => response.json())
			.then(json => {
				let data = Object.keys(json.rates).map(
					el => `${el}: ${json.rates[el]}`
				);

				this.setState({
					currencies: Object.keys(json.rates),
					data: data,
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

	onChangeCurrency = e => {
		this.setState({
			base: e.target.value
		});
		this.makeApiRequestForCurrency(e);
	};

	render() {
		return (
			<div className="App">
				<JumbotronFluid
					heading="Exchange Rate API"
					lead="Using an API for foriegn exhange rates"
				/>
				<Form
					currencyOptions={this.state.currencies}
					baseCurrency={this.state.base}
					onChange={this.onChangeCurrency}
					// makeApiRequest={this.makeApiRequest}
				/>
				<ListGroup {...this.state} />
			</div>
		);
	}
}

export default App;
