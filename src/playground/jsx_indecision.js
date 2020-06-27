console.log("app.js is running");

//if statement

const app = {
    title : "Indecision App",
    subtitle : "Put your life in hands of computer",
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderData();
    }
}

const removeAll = () => {
    app.options = [];
    console.log("Removed all task");
    renderData();
}

const onMakeDecision = () => {
     const randNo = Math.floor(Math.random() * app.options.length);
     const option = app.options[randNo];
     console.log(option);
};

const appRoot = document.getElementById('app');

const renderData = () => {
    //jsx
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "here are ur options" :" no options"}</p>
            <button disabled = {app.options.length === 0 ? true : false } onClick = {onMakeDecision}>What should i do ?</button>
            <button onClick = {removeAll}>Remove All</button>
            {   

                // nos.map((no) => {
                //     return <p key={no}>Number : {no}</p>;
                // })
            }
            <ol>
                {
                    app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                    })
                }
        
            </ol>
           
            
            <form onSubmit = {onFormSubmit}>
                <input type="text" name = "option"/>
                <button>Add option</button>
                <br/>
                <br/>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
}

renderData();