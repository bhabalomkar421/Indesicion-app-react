import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/styles.scss';
// class Header extends React.Component {
//     render(){
//         return (
//             <div className="container">
//                 <p>Hello world</p>
//                 <Navbar />
//             </div>
//         )
//     }
// }

// class Navbar extends React.Component{
//     render(){
//         return (
//             <div className ="navbar">
//                 <p>this</p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Header />, document.getElementById('app'));

// import isAdultCheck,{canDrink}   from './utils.js';

// const age = 21;
// console.log(isAdultCheck(age));
// console.log(canDrink(age));




const Compo = () => (
    <div>
        <h1>Hello world</h1>
    </div>
);

ReactDOM.render(<Compo />, document.getElementById('app'));