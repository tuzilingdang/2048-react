import React, { Component } from 'react';

var containerStyle = {
	width:'80%',
	height:'15rem',
	background:'#f5fff0',
	margin:'auto',
};

var rowStyle = {
	width:'96%',
	height:'2rem',
	background:'#b6dab7',
	margin:'auto',
	marginTop:'0.1rem'
};

class Grid extends Component{
	render() {
		return(
			<div id="grid-container" style={containerStyle}>
				<div className="grid-row" style={rowStyle}>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>

				<div className="grid-row" style={rowStyle}>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
				<div className="grid-row" style={rowStyle}>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
				<div className="grid-row" style={rowStyle}>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
			</div>		
		);
	}
}

export default Grid;