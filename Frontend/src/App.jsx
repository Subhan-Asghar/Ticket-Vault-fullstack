import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
    </>
  )
}

export default App
