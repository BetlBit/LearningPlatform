import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
	render() {
		return (
			<div className='item'>
				<h2>{this.props.item.title}</h2>
				<iframe width="360" height="200" src={this.props.item.video} />
				<FaTrash className='deleteIcon' onClick={() => this.props.onDelete(this.props.item.id)} />
			</div>
		)
	}
}

export default Order