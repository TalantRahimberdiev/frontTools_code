
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from "react-bootstrap";
import './middle.css'
import { bundleHooks } from "../bundle/bundleHooks";
import { Ctx } from "../AppHooks";

export default function Middle() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <Accordion id='accordion'>
         {
            Object.keys(bundleHooks).map((key, index) => {
               return (
                  <Accordion.Item key={index} eventKey={index}>
                     <Accordion.Header>
                        <h3 id='hooksName' className='m-0 p-0 text-success'>{key}</h3>
                     </Accordion.Header>
                     <Accordion.Body id={'hooksDescription_' + mode}>
                        {bundleHooks[key]}
                     </Accordion.Body>
                  </Accordion.Item>
               )
            })
         }
      </Accordion>
   )
}