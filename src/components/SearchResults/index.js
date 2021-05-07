import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";

class Directory extends Component {

  state = {
    employees: [],
    empSort: [],
    search: "",
    sorted: false,
  };

  // check that the component rendered at least once, and pull in our data
  // wait for the information to come back
  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture`)
      .then(res => res.json())
      .then(json => {
        this.setState({ employees: json.results })
      })
  };

  // sort through employees based on search term
  // check if there is a match and set that to empSort for rendering
  sortEmp = () => {
    let { employees, search } = this.state;
    let empSort = employees.filter(sorted => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      )
    })
    this.setState({ empSort })
  }

  // grab search term, activate sorted  
  startSort = event => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmp();
      this.setState({ sorted: true });
    });
  };

  render = () => {

    return (

      <div class="middle">
              {/* if it's not sorted, map accordingly */}
              {!this.state.sorted ? this.state.employees.map(employee => (


                < EmployeeCard
                  key={employee.id.value}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  picture={employee.picture.large}
                />

              ))
                // otherwise map the sorted employees
                : this.state.empSort.map(employee => (

                  <EmployeeCard
                    key={employee.id.value}
                    name={employee.name.first + " " + employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    picture={employee.picture.large}
                  />

                ))};
      </div >

    )

  }

}

export default Directory;