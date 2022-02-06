
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

export default function Application() {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Routes />
      </BrowserRouter>
   )
}


