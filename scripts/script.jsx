function Person(name, age, gender, friends) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.friends = friends;
}

var p = new Person('Joseph Ayers', 18, 'male', ['Peter Parker','Jenna Smith','Gary Thatcher','Max Mills']);

var People = React.createClass({
    getDefaultProps: function() {
      return { items: [] }  
    },
    render: function() {
      var listItems = this.props.items.map(function(item) {
      return (
          <li>
             {item}
          </li>
      );
    });
      
      return (
        <div>
          Hello, My name is {p.name}. I am {p.age} years old.
          My friends are {listItems}
        </div>
      );
    }
});

ReactDOM.render(
  <People items={p.friends} />,
  document.getElementById('content')
);
