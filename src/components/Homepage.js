import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default class Homepage extends Component {
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Navbar />
				<div className='row align-items-center justify-content-center'>
					<div className='col justify-content-center align-items-center'>
						<Link to='/match' className='btn btn-primary' type='button'>
							Dê um Match
						</Link>
					</div>
					<div className='col justify-content-center align-items-center'></div>
				</div>
				<footer></footer>
			</div>
		);
	}
}
