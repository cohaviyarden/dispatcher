
import React from 'react';
import useInput from '../../hooks/useInput';
import './style';
import searchIcon from '../../assets/icons/search.svg';
import { FilterSearch, Icon, Input, SearchInput } from './style';
import { FilterProps } from '../Filter/Filter';

export interface SearchProps{
  searchFunc: () => void,
  filter?: FilterProps
}

const isNotEmpty = (value: string) => value.trim() !== '';

const Search: React.FC<SearchProps> = (props: SearchProps)=> {
    
    const {
        value: searchValue,
        isValid: searchIsValid,
        valueChangeHandler: searchChangeHandler,
        reset: resetSearch,
      } = useInput(isNotEmpty);
    
      let inputIsValid = false;
    
      if (searchIsValid) {
        inputIsValid = true;
      }
      //handle recent searches component
      const searchTouchedHandler = () => {
        console.log("touched")
      }
      
      //handle search articles
      const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!inputIsValid) {
          return;
        }
        props.searchFunc();
        resetSearch();
      };
    
      return (
        <SearchInput>
            <Icon onClick={submitHandler} type="image" src={searchIcon} disabled={!inputIsValid} /> 
            <Input
                type='text'
                id='search'
                value={searchValue}
                onChange={searchChangeHandler}
                onFocus={searchTouchedHandler}
                placeholder="Search"
                autoComplete="off">
            </Input>
            { props.filter && <FilterSearch options={props.filter.options} name={props.filter.name} onChangeValue={() => {}}/>}
        </SearchInput>
      );
    };
  export default Search;