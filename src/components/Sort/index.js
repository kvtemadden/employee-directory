import React from "react";
import "./style.css";
import SortForm from "../SortForm";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Sort extends React.Component {

  state = {
      value: null
  };
  
  handleChange = (event) => {
      this.setState({
          value: event.target.value
      });
  }

  render() {
      return (
          <SortForm value={this.state.value} onChange={this.handleChange} />
      );
  }
}

export default Sort;
