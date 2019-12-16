import React from 'react';
import './SearchField.scss';

export const SearchField = ({onChange}) => {
    return (
        <input 
        type="search" 
        placeholder="Tape here" 
        className="searchbox"
        onChange={onChange}
        />
    )
}