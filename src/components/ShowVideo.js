import React, { Component } from 'react'

export class ShowVideo extends Component {
	render() {
		return (
			<div className='fullItem'>
				<div>
					<div className='item' onClick={() => this.props.onShowItem(this.props.item)}>
					<h2>{this.props.item.title}</h2>
					<iframe width="360" height="200" src={this.props.item.video} />
					<p>{this.props.item.desc}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ShowVideo