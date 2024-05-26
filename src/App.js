import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


// import Content from './components/Content';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            orders: [],
            currentItems: [],
            items:[
                {
                    id: 1,
                    title: 'Корм для кошек сухой с витаминами',
                    img: '1.jpg',
                    desc: 'Сытный ужин "Мясная тарелка"',
                    category:'meal',
                    price: '299'

                },
                {
                    id: 2,
                    title: 'Корм для собак жидкий с говядиной',
                    img: '2.jpg',
                    desc: 'Сочные говядина с овощами',
                    category:'dog',
                    price: '54'

                },
                {
                    id: 3,
                    title: 'Корм для кошек жидкий с кроликом',
                    img: '3.jpg',
                    desc: 'Нежнейший кролик с соусом',
                    category:'cat',
                    price: '50'

                }
            ],
            showFullItem: false,
            fullItem: {} //отображение товара;
        }
        this.state.currentItems = this.state.items
        this.addToOrder=this.addToOrder.bind(this)
        this.deleteOrder=this.deleteOrder.bind(this)
        this.chooseCategory=this.chooseCategory.bind(this)
        this.onShowItem=this.onShowItem.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
                <Footer/>

            </div>
        )
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
        console.log(category)
    }
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el=> el.id!==id)})
        console.log(id)
    }
    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach( el =>{
            if (el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]})
        console.log(this.state.orders)
    }
}

export default App;




















//import {Route, Routes, BrowserRouter as Router,} from "react-router-dom";
// import Home from "./Home";
// import PageNotFound from "./404Page";









