import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=ad2a6f3e435648c4bf8c7c110bae6a1e`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        });
      })
      .catch((error) => {
        this.setState({
          error: true
        });
      });
  }

  renderItems() {
    return !this.state.error ?
      this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
      ))
      : <Error />;
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Sidenews;
