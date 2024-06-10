import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Mode from "./components/Mode";
import ShowVideo from "./components/ShowVideo";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
			items: [
				{
					id: 1,
					title: "Инструкции по охране труда",
					desc: "Инструкции по охране труда. Основные моменты, особенности, нюансы",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 2,
					title: "Электробезопасность",
					desc: "Выпуск 4: Работа с персоналом. Обучение по электробезопасности",
					video:
						"https://www.youtube.com/embed/KgNQg78SjII?si=5atq3wsG9_xB1HPg",
				},
				{
					id: 3,
					title: "ОПБ",
					desc: "А1. Основы Промышленной Безопасности.",
					video:
						"https://www.youtube.com/embed/uEjsP8oidQM?si=KHKMpwgzhHrnGe9V",
				},
				{
					id: 4,
					title: "Состав ОПО",
					desc: "Опасный производственный объект: состав опо и классы опасности",
					video:
						"https://www.youtube.com/embed/7DwyEvzrhDg?si=p7YfpGvbJv82hcat",
				},
				{
					id: 5,
					title: "Пром. Без.",
					desc: "Промышленная безопасность. Опасные объекты. Доцент Ахтямов",
					video:
						"https://www.youtube.com/embed/9r2PTMB4ru0?si=3QcG_mu-fqLBcSc0",
				},
				{
					id: 6,
					title: "Техника безопасности",
					desc: "Тут вы ознакомитесь с техникой безопасности и правами в сфере труда",
					video:
						"https://www.youtube.com/embed/i71yX4aohNI?si=XbE4GN0Rzx_mA-w1",
				},
			],
			showFullItem: false,
			fullItem: {}
		};
		this.addToLearn = this.addToLearn.bind(this)
		this.deleteLearn = this.deleteLearn.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render() {
		return (
			<div className="wrapper">
				<Header orders={this.state.orders} onDelete={this.deleteLearn} />
				<Mode />
				<Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToLearn} />

				{this.state.showFullItem && <ShowVideo onAdd={this.addToLearn} onShowItem={this.onShowItem} item={this.state.fullItem} />}
				<Footer />
			</div>
		);
	}

	onShowItem(item){
		this.setState({fullItem: item})
		this.setState({showFullItem: !this.state.showFullItem})
	}

	deleteLearn(id) {
		this.setState({orders: this.state.orders.filter(el => el.id !== id)})
	}

	addToLearn(item){
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id)
				isInArray = true
		})
		if (!isInArray)
			this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App;