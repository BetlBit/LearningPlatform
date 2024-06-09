import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Mode from "./components/Mode";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 1,
					title: "Техника безопасности",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 2,
					title: "Техника безопасности2",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 3,
					title: "Техника безопасности3",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 4,
					title: "Техника безопасности4",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 5,
					title: "Техника безопасности5",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
				{
					id: 6,
					title: "Техника безопасности5",
					img: "bgHeader.png",
					desc: "Тут вы ознакомитесь с техникой безопасности",
					video:
						"https://www.youtube.com/embed/MAkKR7fXjKE?si=ZbfJBb4QTUvIWM27&amp",
				},
			],
		};
	}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Mode />
				<Items items={this.state.items} />
				<Footer />
			</div>
		);
	}
}

export default App;