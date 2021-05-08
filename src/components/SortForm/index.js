import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SortForm(props) {

return (
<div class="mb-3">
          <label>Sort by...</label>
          <select id="sort" class="custom-select" required onChange={(event) => props.onChange(event)}>
            <option value="">None</option>
            <option value="a-z">Name: A-Z</option>
            <option value="z-a">Name: Z-A</option>
          </select>
        </div>
);

}

export default SortForm;
