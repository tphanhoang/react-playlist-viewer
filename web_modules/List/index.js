import React, {PropTypes, Component } from 'react';
import Item from "Item";
import Input from "Input";
import debounce from "lodash.debounce";

export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
        onInputChange: PropTypes.func,
        autoFilter: PropTypes.bool,
    };

    static defaultProps = {
        title: "",
        items: [],
        onInputChange: ()=>{},
        autoFilter: true,
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    filterName = (item) => {
      return (item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1);
    };


    render() {

      const {
        title,
        items,
        onInputChange,
        autoFilter,
      } = this.props


      return (
        <div className="list">
            {
                <Input placeholder={title} onChange={debounce(onInputChange,3000) || this.onChangeHandler}/>
            }
            {
              items &&
              items.map((item, index) => {
                return (
                    (!autoFilter || autoFilter && this.filterName(item)) &&
                    <Item key={index} name={item.name} />
                );
              })
            }
        </div>)

    }
}
