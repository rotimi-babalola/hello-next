import React from 'react';
import Link from 'next/link';
import { AppContext } from '../components/AppProvider';

const ShowSearch = () => (
  <AppContext.Consumer>
    {
      ({ state, handleChange, handleSubmit }) => {
        return (
          <React.Fragment>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                name="search box"
                placeholder="Search for show"
                onChange={handleChange}
                value={state.searchTerm}
              />
            </form>
            {
              state.shows && <ul>
                {state.shows.map(({ show }) => (
                  <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                      <a>{show.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </React.Fragment>
        )
      }
    }
  </AppContext.Consumer>
)

export default ShowSearch;
