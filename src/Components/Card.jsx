import React from 'react';
import './card.css';

const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className='card'> 
			<img alt='robots' src={`https://robohash.org/${props.id+10}?200x200`} />
			<div className='information'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;