import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";
import SortForm from "../SortForm";

class Directory extends Component {

  state = {
    employees: [],
    empSort: [],
    search: "",
    sorted: false,
    value: ""
  };

  // check that the component rendered at least once, and pull in our data
  // wait for the information to come back
  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=gb&inc=name,email,phone,id,picture,location`)
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
        sorted.email.toLowerCase().includes(search.toLowerCase()) ||
        sorted.location.city.toLowerCase().includes(search.toLowerCase())
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

  //Manages sort when the sort drop down field is chosen
  handleChange = (event) => {
    this.setState({
          value: event.target.value
        });
    let { employees } = this.state;

    if (event.target.value === "a-z") {
    const empSort = [...employees].sort(function (a, b) {
              if (a.name.first < b.name.first) { return -1; }
              if (a.name.first > b.name.first) { return 1; }
              return 0;
    });
    this.setState({ empSort })
    this.setState({ sorted: true });
  }

  if (event.target.value === "z-a") {
    const empSort = [...employees].sort(function (a, b) {
              if (a.name.first < b.name.first) { return 1; }
              if (a.name.first > b.name.first) { return -1; }
              return 0;
    });
    this.setState({ empSort })
    this.setState({ sorted: true });
  }

    }
  


  render = () => {

    return (
      <div>
        <SortForm value={this.state.value} onChange={this.handleChange} />
        <SearchForm name="search" startSort={this.startSort} label="Search" />
        <div className="middle">
          {/* if it's not sorted, map accordingly */}
          {!this.state.sorted ? this.state.employees.map(employee => (


            < EmployeeCard
              key={employee.id.value}
              name={employee.name.first + " " + employee.name.last}
              phone={employee.phone}
              email={employee.email}
              location={employee.location.city}
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
                location={employee.location.city}
                picture={employee.picture.large}
              />

            ))};
      </div >
      </div>
    )

  }

}

export default Directory;