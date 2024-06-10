import React from 'react'
import {useState} from 'react'
import Order from './Order';

const showOrders = (props) => {
	return (<div> {props.orders.map(el => (
			<Order onDelete={props.onDelete} key={el.id} item={el} />
		))}
	</div>)
}

const showNothing = () => {
	return (<div className='empty'>
		<h2>Уроков нет</h2>
	</div>)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false);

	return (
		<header>
			<div className='logo'>
				<span>Learning Platform</span>
				<ul className='nav'>
					<li>Обучающие материалы</li>
					<li onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`learnCartButton ${cartOpen && 'active'}`}> Мои уроки </li>
					{cartOpen && (
						<div className='learnCart'>
							{props.orders.length > 0 ?
								showOrders(props) : showNothing()}
						</div>
					)}
				</ul>
			</div>
			<div className='presentation'></div>
		</header>
	)
}