import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {

return (
  <div className="d-flex justify-content-center mx-auto">
    <form className="form">
      <input
        placeholder="Search for your coworker here"
        name="search"
        type="text"
        className="fw form-control-lg search-font mx-auto"
        onChange={(event) => props.startSort(event)}
      />
    </form>
  </div>
);

}

export default SearchForm;
