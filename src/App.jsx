import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud.academlo.tech/'

function App() {

  const [users, setUsers] = useState()

  const [updateInfo, setUpdateInfo] = useState()

  const [formIsClose, setFormIsClose] = useState(true)


  // Este es para hacer el get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  // Para crear un nuevo usuario
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className="App">

      <div className="tit">
        <h1 className='App_title'>USER CRUD</h1>
        <button onClick={handleOpenForm} className='App_btn'>Create a new User</button>
      </div>

      <div className={`form-container ${formIsClose && 'disable_form'}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>


      {
        users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormIsClose={setFormIsClose}
          />
        ))
      }

    </div>
  )
}

export default App
