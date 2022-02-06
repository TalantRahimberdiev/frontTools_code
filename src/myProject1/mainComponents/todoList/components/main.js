
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Component1 from "./component1";

import Typography from '@mui/material/Typography';
import { Container, Box, Button } from '@mui/material'

export default function Main() {
   const tasks = useSelector(state => state)

   return (
      <Container disableGutters maxWidth='sm' sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
         <Typography variant='h6' sx={{ textAlign: 'center', bgcolor: 'black', color: 'yellow',pb:1,pt:1 }}>
            <p>Task - List.</p>
            <p>React | Redux | Router | Material-UI</p>
         </Typography>
         <Box
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 2, borderBottom: '1px solid black', alignItems: 'center', p: 1, wordBreak: "break-all" }}
         >
            <Button sx={{ mr: 2 }} variant="outlined"><Link to='-1' style={{ textDecoration: 'none', color: 'black' }}>
               create task
            </Link>
            </Button>
            {
               tasks.map((task, index) => (<Link style={{ marginRight: '1vw', color: 'black' }} key={index} to={`${task.id}`}>{task.title}</Link>))
            }
         </Box>
         <Routes>
            <Route path={':id'} element={<Component1 />} />
         </Routes>
      </Container>
   )
}