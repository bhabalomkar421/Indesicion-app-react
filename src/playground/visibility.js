// class VisisbilityToggle extends React.Component {
//     constructor(props){
//         super(props);
//         this.changeVisibility = this.changeVisibility.bind(this);
//         this.state = {
//             visibility : false
//         };
//     }
//     changeVisibility(){
//         this.setState((prevState) => {
//             return {
//                 visibility : !prevState.visibility
//             }  
//         });
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <br />
//                 <button onClick = {this.changeVisibility} >{this.state.visibility ? "hide details" : " show details"}</button>
//                 {(this.state.visibility) && <p>this is a secret</p>}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<VisisbilityToggle />, document.getElementById('app'));

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    changeVisibility(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }  
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <br />
                <button onClick = {this.changeVisibility} >{this.state.visibility ? "hide details" : " show details"}</button>
                {(this.state.visibility) && <p>this is a secret</p>}
           </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// const appRoot = document.getElementById('app');

// let visibility = false;

// const visble_invisible = () => {
//     visibility = !visibility;
//     visibiltyRender();
// }

// const visibiltyRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {visble_invisible}>{(!visibility) ? "show details" : "hide details"}</button>
//             {(visibility) && <p>this is a secret</p>}
//         </div>
//     );   
//     ReactDOM.render(template, appRoot);
// }

// visibiltyRender();
