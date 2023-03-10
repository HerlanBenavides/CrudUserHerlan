import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose }) => {

    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data)
        }

        reset(defaultValues)
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i onClick={handleCloseForm} className="form_x fa-solid fa-xmark"></i>
            <h2 className='tituloForm'>{updateInfo ? 'Edit User' : 'New User'}</h2>
            <div className='form_div'>
                <label className='form_label' htmlFor="email">Email</label>
                <input className='form_input' placeholder='Enter your Email' type="email" id='email'  {...register('email')} />
            </div>

            <div className='form_div'>
                <label className='form_label' htmlFor="password">Password</label>
                <input className='form_input' placeholder='Enter your Password' type="text" id='password' {...register('password')} />
            </div>

            <div className='form_div'>
                <label className='form_label' htmlFor="first_name">First Name</label>
                <input className='form_input' placeholder='Enter your First Name' type="text" id='first_name' {...register('first_name')} />
            </div>

            <div className='form_div'>
                <label className='form_label' htmlFor="last_name">Last Name</label>
                <input className='form_input' placeholder='Enter your Last Name' type="text" id='last_name' {...register('last_name')} />
            </div>

            <div className='form_div'>
                <label className='form_label' htmlFor="birthday">Birthday</label>
                <input className='form_input' placeholder='Enter your Birthday' type="date" id='birthday' {...register('birthday')} />
            </div>

            <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>

        </form>
    )
}

export default FormUsers