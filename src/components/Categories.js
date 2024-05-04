import React, {Component} from 'react';

export class Categories extends Component { //вывод товаров;
    constructor(props) {
        super(props)
        this.state ={
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'meal',
                    name: 'Еда'
                },
                {
                    key: 'care',
                    name: 'Уход и здоровье'
                },
                {
                    key: 'decor',
                    name: 'Акссесуары'
                },
                {
                    key: 'play',
                    name: 'Играть'
                },
                {
                    key: 'dog',
                    name: 'Собаки'
                },
                {
                    key: 'cat',
                    name: 'Кошки'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;