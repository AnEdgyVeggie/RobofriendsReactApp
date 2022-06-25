import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import { requestRobots, setSearchField } from '../actions'
import './App.css';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

function App( { isPending, robots, onRequestRobots, searchField, onSearchChange }) {

	useEffect(() => {
		onRequestRobots()
	}, [])

		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})

			return isPending ? 
			<h2>Loading...</h2> :
		(
		<div className='Appdiv'>
			<h1>   Robofriends   </h1>
			<SearchBox className='search' searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}

// subscribes App to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);