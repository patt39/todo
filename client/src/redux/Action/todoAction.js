import { GET_ALL_TODOS, DELETE_TODO, ACTIVE_TODO } from "./Index";
import axios from "axios"



export const loadtodos = ()  => async (dispatch) => {

    try {

        const response = await axios.get(`http://localhost:8000/api/todos`);
        dispatch({
            type: GET_ALL_TODOS,
            payload: response.data
        })

      } catch (error) {console.error(error)}
}

export const deleteItem = (props) => async (dispatch) => {

    try {
     await axios.delete(`http://localhost:8000/api/todos/${props.slug}`);
        dispatch({
            payload: props.slug,
            type: DELETE_TODO
        })
      } catch (error) {console.error(error)}
}

export const statusItem = (props) => async (dispatch) => {
    
    try {
        await axios.get(`http://localhost:8000/api/todos/${props.slug}/status`);
        dispatch({
            payload: props.slug,
            type: ACTIVE_TODO
        })
    } catch(error) {console.log(error)}
}