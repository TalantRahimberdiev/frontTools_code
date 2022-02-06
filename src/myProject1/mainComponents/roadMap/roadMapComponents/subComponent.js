
import { useParams } from "react-router-dom"

export default function SubComponent({ data }) {
   const { name } = useParams()

   const suitable = data.filter(x => x.name === name)

   function getList(item) {
      return item.map((element, i) => {
         return (
            <li key={i}>{element.name}
               {
                  element.subItems && (
                     <ol>
                        {
                           getList(element.subItems)
                        }
                     </ol>
                  )
               }
            </li>
         )
      })
   }
   return (
      <div className="d-flex justify-content-center">
         <ol>
            {
               getList(suitable)
            }
         </ol>
      </div>
   )
}