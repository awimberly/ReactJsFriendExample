import React from 'react';

function Person(name, age, gender, friends) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.friends = friends;
}

var p = new Person('Joseph Ayers', 18, 'male', ['Peter Parker','Jenna Smith','Gary Thatcher','Max Mills']);
class PersonComponent extends React.Component {	
	constructor(props){
		super(props);
		this.state = {items : props.initialItems};
	}
	render() {
			var listOfFriends = this.state.items.map(function(item, i){
				return (			
					  <li key={i}>
						 {item}
					  </li>
				);
		    });
			return (
				<div>
				  Hello, My name is {p.name}. I am {p.age} years old.
				  My friends are {listOfFriends}
				</div>
			);
	}
}

PersonComponent.propTypes = {initialItems: React.PropTypes.array};
PersonComponent.defaultProps = { initialItems: p.friends };
export default PersonComponent;
