import React from 'react';
import './CardItem.scss';

export const CardItem  =(props) => {
        return(
            <div className="CardItem">
            <img src={`https://robohash.org/${props.user.id}?set=set6`} />
            <h1> {props.user.name} </h1>
        <p>{props.user.email}</p>
            </div>
        )
}