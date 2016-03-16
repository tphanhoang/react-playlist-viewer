import React, { Component, PropTypes } from 'react';
import Item from "Item";
import Input from "Input"

export default class List extends Component {
  propTypes: {
  	name: PropTypes.string,  
  	items: PropTypes.string
  }   
  state = {
        inputValue: "",
        test: null
   };

    onChangeHandler = (event) => {    	
    	const {
            onChange
        } = this.props
		if( typeof onChange=="function" ){			
            onChange(event)                
        }
		
    };
  	
  	render() {
    return (
    <div className="list">
	<Input onChange={this.onChangeHandler} type="text"/>

    {
		
		this.props.items&&
		this.props.items.map((item,index) =>{
        return (
	 	  item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1 &&
          <Item key={index} name={item.name} />
          );
      })
    }
  	</div>
    );
  }
}
