import React from 'react'

export default function Header() {
	return (
		<header>
			<div className='logo'>
				<span>Learning Platform</span>
				<ul className='nav'>
					<li>Главная</li>
					<li>Обучающие материалы</li>
					<li>Мои уроки</li>
				</ul>
			</div>
			<div className='presentation'></div>
		</header>
	)
}