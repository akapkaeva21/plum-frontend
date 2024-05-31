import axios from 'axios'
//import { API_URL, JPA_API_URL } from '../../Constants'

class ProductDataService {

    retrieveAllProducts() {
        //console.log('executed service')
        return axios.get(`/api/v1/products`);
    }

    /*retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }*/

}

export default new ProductDataService()