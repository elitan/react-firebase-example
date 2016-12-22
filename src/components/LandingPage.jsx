import React from 'react';
import { db_ref } from '../firebase/index.js';

class LandingPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: {
				value: null,
				loading: true,
			},
		};

		this.firebase_refs = [];
	}


	componentDidMount() {
		const count_ref = db_ref.child('count');
		this.firebase_refs.push(count_ref);
		count_ref.on('value', snap => {
			this.setState({
				count: {
					value: snap.val(),
					loading: false,
				},
			});
		});
	}

	componentWillUnmount() {
		this.firebase_refs.forEach(ref => {
			ref.off();
		});
	}

	handleAdditionButtonClick() {
		let updates = {};
		updates['count'] = this.state.count.value + 1;
		db_ref.update(updates);
	}

	handleSubtractionButtonClick() {
		let updates = {};
		updates['count'] = this.state.count.value - 1;
		db_ref.update(updates);
	}

	renderCount() {
		if (this.state.count.loading) {
				return <div>Loading count value</div>;
			}
		if (!this.state.count.value) {
			return <div>No count value found</div>;
		}

		return (
			<div>
				Count is: {this.state.count.value}
			</div>
		);
	}

	render() {
		return (
			<div>
				<div>LoL</div>
				{this.renderCount()}
				<button onClick={this.handleAdditionButtonClick.bind(this)}>Add</button>
				<button onClick={this.handleSubtractionButtonClick.bind(this)}>Subtract</button>
			</div>
		);
	}
}

export default LandingPage;
