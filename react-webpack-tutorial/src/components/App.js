import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import update from 'react-addons-update';
 
class App extends React.Component {
	render(){
		return (
				<Contacts />
			);
	};
    
}

class Contacts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contactData: [
				{name: 'aa', phone:'010-2222-1111'},
				{name: 'bb', phone:'010-2222-1111'},
				{name: 'cc', phone:'010-2222-1111'},
				{name: 'dd', phone:'010-2222-1111'}
			]
		};
	}

	_insertContact(name, phone){
		let newState = update(this.state, {
			contactData : {
				$push: [{"name": name, "phone": phone}]
			}
		});

		this.setState(newState);
	}

	render(){
		return(
				<div>
					<h1>Contacts</h1>
					<ul>
						{this.state.contactData.map((contact, i) => {
								return (<ContactInfo  name={contact.name}
													  phone={contact.phone}
													  key = {i}
										/>);

							}
						)}
					</ul>
					<ContactCreator onInsert={this._insertContact.bind(this)}/>
				</div>
			);
	}
}

class ContactInfo extends React.Component{
	handleClick(){
		this.props.onSelect(this.props.contactKey);
	}

	render(){
		return(
				<li>{this.props.name}{this.props.phone}</li>
			);
	}
}

class ContactCreator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			phone: ""
		};
	}

	handleChange(e){
		var nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleClick(){
		this.props.onInsert(this.state.name, this.state.phone);
		this.setState({
			name: "",
			phone: ""
		});
	}

	render(){
		return (
				<div>
					<p>
						<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
						<input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}/>
						<button onClick={this.handleClick.bind(this)}>Insert</button>
					</p>
				</div>
			);
	}
}
 
export default App;