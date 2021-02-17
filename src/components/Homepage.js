import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<section
					className='d-flex justify-content-center align-items-center'
					style={{ minHeight: '100vh' }}
				>
					<div className='row align-items-center justify-content-center'>
						<div className='col justify-content-center align-items-center'>
							<h1>Music connecting people</h1>
							<br />
							<h5>Having the same taste in music is like a soul connection</h5>
							<br />
							<p>
								“Music and rhythm find their way into the secret places of the
								soul.” ― Plato. “Without music, life would be a mistake.” ―
								Friedrich Nietzsche. "O outono é sempre igual." - Sandy e Júnior.
							</p>
							<br />
							<Link to='/match-1' className='btn btn-success btn-lg' type='button'>
								Find Out
							</Link>
						</div>
						<div className='col justify-content-center align-items-center'></div>
					</div>
				</section>
			</div>
		);
	}
}
