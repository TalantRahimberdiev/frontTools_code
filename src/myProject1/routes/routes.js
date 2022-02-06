
import { useRoutes } from 'react-router-dom';

import AppTodoList from '../mainComponents/todoList/AppTodoList'
import AppRoadMap from '../mainComponents/roadMap/AppRoadMap'
import AppHooks from '../mainComponents/hooks/AppHooks'

import Main from '../main';

export default function Routes() {

   const routes = useRoutes([
      {
         path: '/',
         element: <Main />,
         children: [
            {
               path: 'TodoList/*',
               element: <AppTodoList />
            },
            {
               path: 'RoadMap/*',
               element: <AppRoadMap />
            },
            {
               path: 'Hooks',
               element: <AppHooks />
            }
         ]
      }
   ])
   return routes
}

