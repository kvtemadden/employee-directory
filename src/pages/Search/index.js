import React from "react";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";

function Search() {
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
