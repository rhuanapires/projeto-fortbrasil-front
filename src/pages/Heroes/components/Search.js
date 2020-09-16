import React, { useState } from 'react';
// Icons
import { FaSearch } from 'react-icons/fa';
// Components
import { ButtonContainer } from '../../../components/Button';
import { ErrorText, SearchBar, SearchInput } from './Styled';

function Search({ onChange, value, onClick }) {
  const [errorSearch, setErrorSearch] = useState(false);

  const doSearch = () => {
    if (value.length >= 3) {
      setErrorSearch(false);
      onClick();
    } else {
      setErrorSearch(true);
    }
  };

  const changeText = (e) => {
    const text = e.target.value;
    setErrorSearch(false);
    onChange(text.trim());
  };

  return (
    <>
      <SearchBar>
        <SearchInput
          placeholder="Search for a Hero (At Least 3 letters)"
          onChange={changeText}
          value={value}
          hasError={errorSearch}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              doSearch();
            }
          }}
        />
        <ButtonContainer onClick={doSearch}>
          <FaSearch style={{ marginRight: 10 }} />
          Search
        </ButtonContainer>
      </SearchBar>
      {errorSearch && (
        <ErrorText>
          You should enter at least 3 characters to do the research
        </ErrorText>
      )}
    </>
  );
}

export default Search;
