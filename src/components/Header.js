import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import {useNavigate} from "react-router-dom";

const showOrders = (props) => {
    let sum=0
    props.orders.forEach(el => sum += Number.parseInt(el.price))
    return ( <div>
        {props.orders.map(el=>(
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='sum'>Сумма заказа: {new Intl.NumberFormat().format(sum)}₽</p>
    </div>)
}

const showNothing = () => {
    return (<div className = 'empty'>
    <h2> Товаров нет </h2>
    </div>)
}



export default function Header(props) {
    let [cardOpen, setCardOpen]=useState(false)
    const navigate = useNavigate();
    const navigateToContacts = () => {
        // 👇️ Navigate to /contacts
        navigate('/contacts');
    };
    const navigateToPlumfamily = () => {
        // 👇️ Navigate to /contacts
        navigate('/plumfam');
    };
    return (
        <header>
            <div>
                <span className='logo'> PluM </span>
                <ul className='nav'>
                    <li> <button onClick={navigateToPlumfamily}>Про нас</button></li>
                    <li>  <button onClick={navigateToContacts}>Контакты</button></li>
                </ul>
                <FaShoppingCart onClick={()=>setCardOpen(cardOpen=!cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`}/>
                {cardOpen && (
                    <div className='shop-card'>
                        {props.orders.length >0 ?
                        showOrders(props): showNothing()
                        }
                        </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}
