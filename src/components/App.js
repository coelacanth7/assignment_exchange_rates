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
					onChange={this.onChange}
				/>
				<ListGroup {...this.state} />
			</div>
		);
	}
}

export default App;
