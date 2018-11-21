import React from 'react';
import Link from 'next/link';
import { AppContext } from '../components/AppProvider';

const ShowSearch = () => (
  <AppContext.Consumer>
    {
      ({ state, handleChange, handleSubmit }) => {
        return (
          <React.Fragment>
            <h1>Search for TV shows</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                name="search box"
                placeholder="Search for show"
                onChange={handleChange}
                value={state.searchTerm}
              />
            </form>
            {state.shows && <ul>
              {state.shows.map(({ show }) => (
                <li key={show.id}>
                  <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <a>{show.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            }
            <style jsx>{`
              h1, a {
                font-family: "Arial";
              }

              ul {
                padding: 0;
              }

              li {
                list-style: none;
                margin: 5px 0;
              }

              a {
                text-decoration: none;
                color: blue;
              }

              a:hover {
                opacity: 0.6;
              }
            `}
            </style>
          </React.Fragment>
        )
      }
    }
  </AppContext.Consumer>
)

export default ShowSearch;
