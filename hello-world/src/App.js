import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return <div>Hello, world!</div>;
//   }
// }

// //上記がトランスパイルされると、以下のようなコードが表示される。
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!"
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return <h1>Hello, world!</h1>;
//   }
// }

// class App extends Component {
//   render() {
//     const greeting = "Hi, Tom!";
//     const dom = <h1 className="foo">{greeting}</h1>; 
//     return dom;
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }

// const App = () =>{
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }

// const Cat = () =>{
//   return <div>Meow!</div>
// }

// const App = () =>{
//   return (
//     <div>
//       <User name={"Taro"} age={10} />
//       <User name={"Hanako"} age={5} />
//     </div>
//   )
// }

const App = () =>{
  const profiles = [
    {name:"Taro", age:10},
    {name:"Hanako", age:5},
    {name:"Noname", age:3}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) =>{
  return <div>Hi! I am {props.name}, and {props.age} years old! </div>
}

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age:1
// }

export default App;
