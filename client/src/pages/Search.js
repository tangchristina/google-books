import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Axios from "axios";


class Search extends Component {
  state = {
    books: [],
    bookTitle: "",
    results: [],
    title: "",
    author: "",
    description: "",
    bookData: {}    
}

  componentDidMount() {

  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.bookTitle) {

      const title = this.state.bookTitle.trim();

      API.searchBook(title)
      .then(res => {

          //console.log(res.data.items);

          this.setState({
          results: res.data.items
          });
      })
      .catch(err => console.log(err));
      }
      //console.log(this.state.results)
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveBook = book => {
    API.saveBook(book)
    .then(res => {
      alert("book saved");
        
    })
    .catch(err => console.log(err));
};


  render() {
    return (<div>
            <Jumbotron>
              <h1>Google Books Search</h1>
              <p>Search and Save Books of Interest</p>
            </Jumbotron>
            <Row>
            <Col size="sm-12">
            <form>
              <Input
              type="text"
              value={this.state.bookTitle}
              onChange = {this.handleInputChange}
              name="bookTitle" 
              placeholder="Keyword" 
              />
              <FormBtn onClick={this.handleFormSubmit}>Search Google Books</FormBtn>
            </form>
            </Col>
            </Row>
            <Row>
            <Col size="sm-12">
                {this.state.results.length ? (
                <List>
                    {this.state.results.map((book, index) => (
                    <ListItem key={book.id}>
                        {/* <img src={book.volumeInfo.imageLinks.Thumbnail}></img> */}
                        <strong>
                            {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                        </strong><br></br>
                        {book.volumeInfo.description}
                        <div className="book-btn-div">
                        <SaveBtn
                            key={"" + index + book.id}
                            disabled={book.volumeInfo.infoLink === "/"}
                            onClick={() => this.saveBook({
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors[0],
                            description: book.volumeInfo.description,
                            //image: book.volumeInfo.imageLinks.Thumbnail,
                            link: book.volumeInfo.infoLink,
                            _id: book.id
                            })}
                        >
                            Save Book
                        </SaveBtn>
                        </div>
                    </ListItem>
                    ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
                )}
            </Col>
            </Row>
            </div>
    );
  }
}


export default Search;
