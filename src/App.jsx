import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Watch from './pages/watch/Watch'



const App = () => {
  const user=null
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) :(
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
