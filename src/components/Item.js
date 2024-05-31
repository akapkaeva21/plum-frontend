import React, {Component, useEffect, useState} from 'react';

export class Item extends Component { //вывод товара;

    
    render() {
        return (
            <div className='item'>
                
                <img src={"./img/"+this.props.item.img } width={250} height={375} alt="id" onClick={() => this.props.onShowItem(this.props.item)}/>
                <h2>{this.props.item.name}</h2>
                <b>{this.props.item.description}</b>
                <p>{this.props.item.price}₽</p>
                <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    } // добавление элемента в корзину;
}

export default Item;