import React from 'react';
import { useGetLP } from './hooks';

export const UserDetail = ({ selectedUser }) => {
  const { data, isLoading, isError } = useGetLP(
    'search',
    selectedUser
  );
  return (
    <>
      <h1>{selectedUser}</h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
