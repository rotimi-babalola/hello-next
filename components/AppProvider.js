import React from 'react';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      shows: [],
    }
  }

  handleChange = (evt) => {
    console.log(evt);
    // this.setState({
    //   searchTerm: evt.target.value,
    // });
  }

  handleSubmit = async (evt) => {
    // prevents the form from submitting
    evt.preventDefault();

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`);

    const data = await res.json();

    this.setState({
      shows: data,
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      >
        {/* {console.log(this.props, 'props')} */}
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider;
