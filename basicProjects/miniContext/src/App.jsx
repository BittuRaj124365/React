import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
