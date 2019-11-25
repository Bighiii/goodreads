import React, {Component, Fragment} from "react"
import { books } from "../../books"

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

  onChange = event => {
    console.log(event.target.value)
    this.setState({searchTerm : event.target.value})
  }

  search = () => {
    this.setState({
      searchedBooks: this.state.books.filter(book =>
        book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })
  }

  render = () =>{
    return (
      <Fragment>
        <input placeholder="Search here" onChange={this.onChange}/>
        <button onClick = {this.search}>Search</button>
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