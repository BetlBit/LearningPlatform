import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.title}</h2>
				<iframe width="360" height="200" src={this.props.item.video} />
				<p onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.desc}</p>
				<div className='addToCart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
			</div>
		)
	}
}

export default Item