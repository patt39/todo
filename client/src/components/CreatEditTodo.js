import React, { useState, useEffect } from 'react'
import {Form} from "reactstrap"
import {useParams, useHistory} from "react-router-dom"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    title: yup.string().required().min(3).max(200)
})

const CreatEditTodo = () => {
    const history = useHistory()
    const { todo } = useParams()
    const isAddMode = !todo
    const {
        register,
        handleSubmit,
        setValue,
        formState
    } = useForm({ resolver: yupResolver(schema) })
    const { isSubmitting, errors } = formState
    const [ setErrormessage] = useState('')

    useEffect(() => {
        const loadItems = async () => {
            if (!isAddMode) {
                await axios.get(`http://localhost:8000/api/todos/${todo}`)
                    .then(response => {
                        const fields = ['title', 'body', 'slug']
                        fields.forEach(field => setValue(field, response.data[field]))
                    })
            }
        }
        loadItems()
    }, [todo, isAddMode, setValue])

    const updateItem = async (todo, data) => {
        await axios.put(`http://localhost:8000/api/todos/${todo}`, data)
            .then((res) => {
                history.push('/')
            }).catch((error) => {
                setErrormessage(error.response.data.message)
            })
    }

    const createItem = async (data, e) => {
        await axios.post(`http://localhost:8000/api/todos`, data)
            .then((res) => {
                history.push('/')
            }).catch((error) => {
                setErrormessage(error.response.data.message)
            })
    }

    const onSubmit = (data) => {
        return isAddMode ? createItem(data) : updateItem(todo, data)
    }

    return (

         <Form className="add-items d-flex" onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''} todo-list-input `}
                placeholder="What do you need to do today?"
                name="title"
                {...register("title")}
                id="title"
                required /> 
                <span className='invalid-feedback'>
                    <strong>{errors.title?.message}</strong>
                </span>
            <textarea className={`form-control ${errors.body ? 'is-invalid' : ''} todo-list-input `}
                type="text"
                {...register("body")}
                name="body"
                id="body"
                placeholder="Give a description"
                />  
                <span className='invalid-feedback'>
                    <strong>{errors.body?.message}</strong>
                </span>
            <button disabled={isSubmitting} type="submit"
                className="add btn btn-primary font-weight-bold todo-list-add-btn">
                Save
            </button> 
        </Form>


    )
}
export default CreatEditTodo