import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'));

const GroceryListFtn = props => {
    return (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    )
}

let groceryList = (
    <ul>
        <li>Apples</li>
        <ul>
            <li>$1.00 per lb</li>
        </ul>
        <li>Oranges</li>
        <ul>
            <li>$0.70 per lb</li>
        </ul>
        <li>Mangos</li>
        <ul>
            <li>$2.00 per lb</li>
        </ul>
    </ul>
)

ReactDOM.render(
    <GroceryListFtn item1="Apples" item2="Oranges" item3="Mangos" />

    ,
    document.getElementById('root')
)