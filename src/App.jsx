import axios from 'axios'
axios.defaults.withCredentials = true
import './App.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const App = () => {
  const createCookies = async () => {
    // cookies.set('myCat', 'Pacman', {
    //   path: '/',
    //   expires: new Date(new Date().getTime() + 10000),
    //   httpOnly: true,
    // })

    try {
      // const resp = await axios.get('http://jsonplaceholder.typicode.com/users/')
      const resp = await axios.get('http://localhost:9000/')
      console.log(resp)
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
        <button className='button red'>Delete Cookie</button>
      </div>
    </div>
  )
}
export default App
