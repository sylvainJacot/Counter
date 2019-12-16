import React from 'react';
import {CardItem} from '../CardItem/CardItem';
import './CardList.scss';


export const CardList = (props) => {
        return (
            <div className="cardList">
            {props.users.map(user => (
                <CardItem key={user.id} user={user}/>
                ))}
            </div>
        )
}
