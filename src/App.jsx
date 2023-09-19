import axios from 'axios'
axios.defaults.withCredentials = true
import './App.css'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
// import Cookies from 'universal-cookie'

// const cookies = new Cookies()
const baseUrl = 'http://localhost:9000/'
// const baseUrl = 'https://http-cookie.onrender.com/'

const App = () => {
  const [cookies] = useCookies(['name'])
  const [user, setUser] = useState('')

  const getPosts = async () => {
    try {
      const resp = await axios.get(`${baseUrl}post`, {
        headers: {
          Authorization: `Bearer ${cookies.name}`,
        },
      })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  const createCookies = async () => {
    try {
      const resp = await axios.get(`${baseUrl}create/${user}`)
      console.log(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteCookies = async () => {
    try {
      const res = await axios.get(`${baseUrl}delete`)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='app'>
      <h1>HTTP ONLY COOKIE DEMO</h1>
      <input
        type='text'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder='name'
      />
      <div className='box'>
        <button className='button green' onClick={createCookies}>
          Create Cookies
        </button>
        <button className='button yellow' onClick={getPosts}>
          Renew Cookies
        </button>
        <button className='button red' onClick={deleteCookies}>
          Delete Cookie
        </button>
      </div>
    </div>
  )
}
export default App
