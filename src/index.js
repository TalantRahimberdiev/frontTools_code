
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Application from './myProject1/Application'

const Index = () => {
   return (
      <div>
         <Application />
      </div>
   )
}

ReactDOM.render(<Index />, document.getElementById('root'))
