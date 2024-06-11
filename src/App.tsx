import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import { CreateNewUser } from './components/CreateNewUser'

function App () {
  return (
    <>
      <h1 className='firstTitle'>Users registered to our newsletter</h1>
      <ListOfUsers />
      <CreateNewUser />
    </>
  )
}

export default App
