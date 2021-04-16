import React, { useEffect,} from 'react'
import '../App.css';
import { loadtodos, deleteItem, statusItem } from '../redux/Action/todoAction'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory, Link} from "react-router-dom"



const TodoIndex = () => {
  const history = useHistory()
  const itemTodo = useSelector(state => state?.todos?.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadItems = async () => {
        await dispatch(loadtodos())
    }
    loadItems()
},)
 
  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Awesome Todo list</h4>
                        <div className="add-items d-flex"> 
                            <Link  to={`/todo/new/`} >Add Task</Link> 
                        </div>
                        <div className="list-wrapper">
                            <ul className="d-flex flex-column-reverse todo-list">
                                {itemTodo.map((item) => (
                                    <li className={item.status === true ? "completed" : "nul"} key={item.id}>
                                    <div className={item.status}> <label className="form-check-label"> </label>
                                        <input  className="checkbox" type="checkbox" checked={item.status}/>{item.title}<i className="input-helper">
                                        <button className="btn-info" onClick={statusItem(item)}>Completed</button>
                                        <button onClick={() => history.push(`/todo/${item.slug}/edit/`)} className="btn-success">Edit</button>
                                        <button className="btn-danger" onClick={deleteItem(item)}>Delete</button>
                                    </i> 
                                    </div>
                                </li>
                                ))}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default TodoIndex;
