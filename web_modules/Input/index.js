import React, { Component, PropTypes } from 'react';


export default class Input extends Component {

  static defaultProps = {
  	type:"text",
  	onChange: ()=>{},
  	name: null,
  	placeholder: "...",
  	value: null
  }  
  onChangeHandler = (event) => {
        const {
            onChange
        } = this.props
        if( typeof onChange=="function" ){
        	console.log(event.target)
            onChange(event)
        }
  };
  propTypes: {
  	name: PropTypes.string 
  }
  render() {
  	const {
  		type,
  		name,
  		placeholder,
  		value
  	} = this.props
    return (
		<input type={type} placeholder={placeholder} name={name} className="input" value={value}  onChange={this.onChangeHandler} />
    );
  }
}

