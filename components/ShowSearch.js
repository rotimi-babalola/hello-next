import React from 'react';
import ShowContext from './show-context';

class ShowSearch extends React.Component {

  handleSubmit = async (evt) => {
    // evt.preventDefault();
    // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`);
    // const data = await res.json();

    // return data;
    console.log(evt);
  }

  handleChange = (evt) => {
    // this.setState({
    //   searchTerm: evt.target.value,
    // });
    console.log(evt);
  }

  render() {
    return (
      <ShowContext.Consumer>
        {({ setShows, setSearchTerm, searchTerm }) => (
          <form onSubmit={() => setShows(this.handleSubmit)}>
            <input
              type="search"
              name="search box"
              placeholder="Search for show"
              onChange={(evt) => console.log(evt)}
            />
          </form>
        )}
      </ShowContext.Consumer>
    )
  }
}

export default ShowSearch;
