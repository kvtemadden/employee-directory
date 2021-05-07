import React, { useState, useEffect } from "react";
// import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import EmployeeCard from "../../components/EmployeeCard";

function Search() {
  // const [search, setSearch] = useState("");
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("");

  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }

  //   API.searchTerms(search)
  //     .then(res => {
  //       if (res.data.length === 0) {
  //         throw new Error("No results found.");
  //       }
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       setTitle(res.data[1][0]);
  //       setUrl(res.data[3][0]);
  //     })
  //     .catch(err => console.log(err));
  // }, [search]);

  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };


  
  return (
    <div>
      <h1 className="text-center title-section">Employee Directory</h1>
      <Container style={{ minHeight: "100vh" }}>
        <p class="info">To begin searching, type in the name or email of the user you wish to find. The results will automatically filter for you.</p>
        <SearchResults />
      </Container>
    </div>
  );
}

export default Search;
