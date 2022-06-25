import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
		<>
			<input 
			type='search' 
			placeholder='Search RoboFriends' 
			onChange={searchChange}
			/>
		</>
	);
}

export default SearchBox;