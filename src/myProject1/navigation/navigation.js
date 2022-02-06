
import { Link, Outlet } from 'react-router-dom';

export default function Navigation() {
   return (
      <div>
         <h2 className='text-center'>Frontend Tools.</h2>
         <nav className='fs-3 d-flex flex-wrap justify-content-around ms-5 me-5 mb-3' >
            <Link to={'TodoList'} >TodoList</Link> | {' '}
            <Link to={'RoadMap'}>RoadMap</Link> | {' '}
            <Link to={'Hooks'}>Hooks</Link>
         </nav>
         <Outlet />
      </div>
   )
}

