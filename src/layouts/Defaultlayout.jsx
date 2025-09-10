//richiamo il contenuto di navbar tramite la props
import Navbar from '../components/navbar'
//componente che serve per renderizzare i componenti figli nelle rotte annidate.
import { Outlet } from 'react-router-dom'

const Defaultlayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  )
}

export default Defaultlayout