import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options : [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handlePick = () => {
        //randomly picking any option
        const randNo = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[randNo];
        this.setState(() => ({
            selectedOption: opt
        }));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option is already exists';
        }

        this.setState((prevState) => ({ options : prevState.options.concat(option) }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }
    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){
            console.log(e);
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    ComponentDidUnmount = () => {
        console.log('component did unmount');
    }
    
    render(){
        const title = "Indecision ";
        const subtitle = "put your life in the hands of computer";
        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <div className="container">
                    <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOptions 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};

export default IndecisionApp;