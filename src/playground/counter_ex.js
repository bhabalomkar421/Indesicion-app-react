class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(isNaN(count)){
            this.setState(() => ({ count }));
        }
        console.log('fetching data');
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state.count){
            localStorage.setItem('count', this.state.count);
            console.log('saving data');
        }
        
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        });
    }

    handleReset(){
        this.setState(() => {
            return {
                count :  0
            }
        })
    }

    handleSubOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleAddOne}> +1 </button>
                <button onClick = {this.handleReset}>Reset</button>
                <button onClick = {this.handleSubOne}> -1 </button>
            </div>
        );
    }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count : 0
//         }
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.handleSubOne = this.handleSubOne.bind(this);
//     }
//     handleAddOne(){
//         console.log("Add one");
//         this.setState((prevState) => {
//             return {
//                 count : prevState.count + 1
//                 }
//             }
//         );
//     }

//     handleReset(){
//         console.log("reset");
//         this.setState(() => {
//             return {
//                 count : 0
//                 }
//             }
//         );
//     }

//     handleSubOne(){
//         console.log("Subtract one");
//         this.setState((prevState) => {
//             return {
//                 count : prevState.count - 1
//             }
//         });
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Count : {this.state.count} </h1>
//                 <button onClick = {this.handleAddOne}>+1</button>
//                 <button onClick = {this.handleReset}>Reset</button>
//                 <button onClick = {this.handleSubOne}>-1</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count += 1;
//     console.log("addOne is clicked");
//     renderCounterApp();
// }

// const subOne = () => {
//     count -= 1;
//     console.log("SuboNe is clicked");
//     renderCounterApp();
// }

// const onReset = () => {
//     count = 0;
//     console.log("Onreset is clicked");
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateCount = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick = {addOne}> +1 </button>
//             <button onClick = {onReset}>Reset</button>
//             <button onClick = {subOne}> -1 </button>
//         </div>
//     );
//     ReactDOM.render(templateCount, appRoot);
// }

// renderCounterApp();
