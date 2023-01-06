import React from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

    const handleEdit = () => {
        setUpdateInfo(user);
        setFormIsClose(false)
    }


    return (
        <article>
            <h2>{`${user.first_name} ${user.last_name} `}</h2>

            <hr />

            <ul>
                <h4 className='titulares'>Email</h4>
                <li><span>Email: </span>{user.email}</li>
                <h4 className='titulares'>Cumpleaños</h4>
                <li><span>Birthday: </span>{user.birthday}</li>
            </ul>

            <hr />

            <footer>
                <i onClick={()=>deleteUserById(user.id)} className="fa-solid fa-trash"></i>
                <i onClick={handleEdit} className="fa-solid fa-pencil"></i>
            </footer>
        </article>
    )
}

export default UserCard