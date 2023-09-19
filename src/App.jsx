import axios from 'axios'
axios.defaults.withCredentials = true
import './App.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
// const baseUrl = 'http://localhost:9000/'
const baseUrl = 'https://http-cookie.onrender.com/'

const App = () => {
  const createCookies = async () => {
    // cookies.set('myCat', 'Pacman', {
    //   path: '/',
    //   expires: new Date(new Date().getTime() + 10000),
    //   httpOnly: true,
    // })

    try {
      // const resp = await axios.get('http://jsonplaceholder.typicode.com/users/')
      const resp = await axios.get(baseUrl)
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
      <div className='box'>
        <button className='button green' onClick={createCookies}>
          Create Cookies
        </button>
        <button className='button yellow'>Renew Cookies</button>
        <button className='button red' onClick={deleteCookies}>
          Delete Cookie
        </button>
      </div>
    </div>
  )
}
export default App
