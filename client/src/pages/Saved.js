import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
  state = {
    books: [],
    bookTitle: "",
    results: [],
    title: "",
    author: "",
    description: "",
    bookData: {}
  };

  componentDidMount() {
    this.loadBooks();
  }

  deleteBook = book => {
    API.deleteBook(book)
    .then(res => {

    })
    .catch(err => console.log(err));  
  }

  loadBooks = books => {
    API.getBooks()
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1> Saved Books </h1>{" "}
        </Jumbotron>{" "}
        {this.state.books.length ? (
          <List>
            {" "}
            {this.state.books.map((book) => (
              <ListItem key={book.id}>
                <strong>
                  {" "}
                  {book.title} by {book.author}{" "}
                </strong>{" "}
                {book.description}{" "}
                <DeleteBtn onClick={() => this.deleteBook({                            
                            _id: book.id})} />{" "}
              </ListItem>
            ))}{" "}
          </List>
        ) : (
          <h3> No saved books yet </h3>
        )}{" "}
      </Container>
    );
  }
}
export default Saved;
