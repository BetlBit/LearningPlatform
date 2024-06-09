import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<h2>{this.props.item.title}</h2>
				<iframe width="360" height="200" src={this.props.item.video} />
				<p>{this.props.item.desc}</p>
				<div className='addToCard'>+</div>
			</div>
		)
	}
}

export default Item