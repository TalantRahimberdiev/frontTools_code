
import MainComponent from "./roadMapComponents/mainComponent";
import { Container } from "react-bootstrap";

export default function AppRoadMap() {
   return (
      <Container className='bg-light p-0' style={{minHeight:'100vh'}}>
         <MainComponent />
      </Container>
   )
}