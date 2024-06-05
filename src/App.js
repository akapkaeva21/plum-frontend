import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import PageNotFound from "./404Page";
import Contacts from "./components/Contacts";
import PluMfamily from "./components/PluMfamily";

import Registration from "./Registration";


// import Content from './components/Content';
//const title_URL = "http://localhost:8082/api/v1/products"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            categories: [],
            items: [],
            img: [],
            loading: true,
            showFullItem: false,
            fullItem: {} //отображение товара;

        };

        //this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        //this.refreshProducts=this.refreshProducts.bind(this)
    }

    componentDidMount()
    {
        axios.get("http://localhost:8082/api/v1/products")
            .then(response => {
                //this.setState({items : response.data});
                this.setState({currentItems : response.data});
            });
        axios.get("http://localhost:8082/api/v1/categories")
            .then(response => {
                //this.setState({items : response.data});
                this.setState({categories: response.data});
            });
    }

    render() {
        const  {currentItems} = this.state;
        return (
            <Router>
                <Routes>
                    <Route exact path="/home" element={<div className="wrapper">
                        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                    <Categories chooseCategory={this.chooseCategory}/>
                    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                        {this.state.showFullItem &&
                                <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                    <Footer/> </div>}/>
                    <Route exact path="/plumshop/contacts"
                           element={<div className="wrapper"> <Contacts/> </div>}/>
                    <Route exact path="/"
                           element={<div className="presentation"> <Registration/> </div>}/>
                    <Route
                        path="*"
                        element={<div className="wrapper"><PageNotFound/></div>}/>
                </Routes>
            </Router>
        )
    }



    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    // chooseCategory (categories) {
    //     console.log(categories)
    //     this.setState({
    //         currentItems: this.state.currentItems.filter(el => el.categories === categories)
    //     });
    //     console.log(this.state.currentItems)
    //
    // }
    chooseCategory(category) {
        const {categories} = this.state;
        const {currentItems} = this.state;
        console.log(this.state.currentItems.img);

            this.setState({
                currentItems: this.state.currentItems.filter(el => el.categories.some(el => el.id===category))})
            // console.log(this.state.currentItems.map(el => el.categories.map(el => el.id)));
            //  console.log (this.state.currentItems.filter(el => el.categories.filter(el => el.id[0])))

        //     console.log(this.state.categories.map(el => el.id));
        //console.log(this.state.currentItems.map(el => el.categories.map(el => el.id)));
    }



    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter((el) => el.id !== id)})
    }

//     addToOrder(item) {
//         let isInArray = false
//         this.state.orders.forEach((el) => {
//             if (el.id === item.id)
//                 isInArray = true
//         })
//         if(!isInArray)
//             this.setState({orders: [...this.state.orders, item]})
//         console.log(this.state.orders)
//     }
// }
    addToOrder(item) {
        console.log(item.id)
        const updatedOrders = [this.props.orders]; // Создаем копию текущего заказа
        const existingProductIndex = updatedOrders.findIndex((el) => el.id === item.id);

        if (existingProductIndex !== -1) {
            // Если товар уже есть в корзине, увеличиваем его количество
            updatedOrders[existingProductIndex].quantity += 1;
        } else {
            // Если товара нет в корзине, добавляем его с начальным количеством 1
            updatedOrders.push({orders: [...this.state.orders, item], quantity: 1});
        }
// Обновляем состояние заказа
        this.props.setOrders(updatedOrders);
    }}

export default App;




















//import {Route, Routes, BrowserRouter as Router,} from "react-router-dom";
// import Home from "./Home";
// import PageNotFound from "./404Page";









