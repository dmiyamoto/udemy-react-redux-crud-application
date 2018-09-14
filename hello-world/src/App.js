import React, { Component } from 'react';

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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </React.Fragment>
    )
  }
}

export default App;
