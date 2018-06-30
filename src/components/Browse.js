import React from 'react';
import { getBooks } from '../utils/fetchBooks';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    };
  }

  componentDidMount() {
    getBooks(this.props.category)
      .then(res => this.setState({ bookList: res.results }))
      .then(() => console.log(this.state))
      .catch(() => console.log('Error setting state in Browse'));
  }

  render() {
    const { bookList } = this.state;
    return (
      <React.Fragment>
        <h1>Best Sellers in Young Adult</h1>
        {bookList.map(book => {
          return (
            <React.Fragment>
              <img src="" alt="" />
              <div>
                <h2>{book.book_details[0].title} </h2>
                <p>
                  Written by {book.book_details[0].author}
                  <br />
                  <br />
                  {book.book_details[0].description}
                </p>
              </div>
            </React.Fragment>
          );
        })};
      </React.Fragment>
    );
  }
}
