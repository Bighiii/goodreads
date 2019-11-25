import React, {Component, Fragment} from "react"
import { books } from "../../books"
import Search from "../search"

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: "Endava",
      books: books.slice(0,20),
      searchedBooks : books.slice(0,20),
      searchTerm: ""
    }
  }

  onChange = (event) => {
    console.log(event.target.value)
    this.setState({searchTerm : event.target.value})
  }

  search = (input) => {
    this.setState({
      searchedBooks: this.state.books.filter(book =>
        book.title.toLowerCase().includes(input.toLowerCase()))
    })
  }

  render = () =>{
    return (
      <Fragment>
        <Search search={this.search}/>
        <ul>
          {
            this.state.searchedBooks.map((book, index) => (
              <li key={index}>{ `${book.title} - ${book.authors}`}</li>
            ))
          }
        </ul>
      </Fragment>
    )
  }

}

export default App;