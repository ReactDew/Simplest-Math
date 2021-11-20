import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from "./components/Header"
import Welcome from './components/Welcome'
import Login from './pages/Login'
import Register from "./pages/Register"
import Arithmetic from './pages/Arithmetic'
import AdminPanel from "./pages/AdminPanel"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/adminpanel' component={AdminPanel} />
        <Route path='/fractions' component={Arithmetic} />
      </Switch>
    </Router>
  )
}

export default App
