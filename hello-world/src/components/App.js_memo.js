import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
// import PropTypes from 'prop-types';


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

// const App = () =>{
//   const profiles = [
//     {name:"Taro", age:10},
//     {name:"Hanako", age:5},
//     {name:"Noname", age:3}
//   ]
//   return (
//     <div>
//       {
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index} />
//         })
//       }
//     </div>
//   )
// }

// const User = (props) =>{
//   return <div>Hi! I am {props.name}, and {props.age} years old! </div>
// }

// User.PropTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// User.defaultProps = {
//   age:1
// }

// const App = () =>(<Counter></Counter>)

// class Counter extends Component {
class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state =  {count:0}
  // }

  // hundlePlusButton = () => {
  //   // console.log("hundlePlusButton")
  //   // console.log(this.state.count)
  //   // const currentCount =this.state.count
  //   // this.setState({count: currentCount + 1})
  //   this.setState({count: this.state.count + 1})
  // }

  // hundleMinusButton = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  // render(){
  //   console.log("render");
  //   return(
  //     <React.Fragment>
  //       <div>count: {this.state.count}</div>
  //       <button onClick={this.hundlePlusButton}>+1</button>
  //       <button onClick={this.hundleMinusButton}>-1</button>
  //     </React.Fragment>
  //   )
  // }
  render(){
    const props = this.props

    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({ 
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

//上記を簡略化
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
