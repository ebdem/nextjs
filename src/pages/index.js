import React from 'react'
import { connect } from 'react-redux';

import { counterIncriment, counterDecriment, counterIncrimentAsync } from '../store/actions/counter';

const Home = (props) => {
	return (
		<div>
			<div className='counter'>{props.counter}</div>
			<div className='controlls'>
				<button onClick={props.add}>Add one</button>
				<button onClick={props.sub}>Sub one</button>
				<button onClick={props.addAsync}>Add one async</button>
			</div>

			<style jsx>{`
				.counter {
					text-align: center;
					font-size: 40px;
					font-family: Arial;
					margin-top: 200px;
					margin-bottom: 100px;
				}
				.controlls {
					display: flex;
					justify-content: center;
				}
				button {
					height: 40px;
					padding: 0 20px;
					border: none;
					border-radius: 5px;
					margin: 20px;
					cursor: pointer;
					background: #1b81ff;
					color: white;
					font-weight: bold;
				}
    			`}</style>
		</div>
	);


}

const mapStateToProps = (state) => {
	return {
		counter: state.counter.count
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		add: () => dispatch(counterIncriment()),
		sub: () => dispatch(counterDecriment()),
		addAsync: () => dispatch(counterIncrimentAsync()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);