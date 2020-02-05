import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
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
      return (
        <div>
          <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
      );
    }
  }


export default Saved;