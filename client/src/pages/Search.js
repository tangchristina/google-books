import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    bookTitle: "",
    results: [],
    title: "",
    author: "",
    description: "",    
}

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };



  render() {
    return (<div>
            <Jumbotron>
              <h1>Google Books Search</h1>
              <p>Search and Save Books of Interest</p>
            </Jumbotron>
            <form>
              <Input 
              value={this.state.title}
              onChange = {this.handleInputChange}
              name="title" 
              placeholder="Title (required)" 
              />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
            </div>
    );
  }
}


export default Search;
