
const initialState = []

export default function reducer1(state = initialState, action) {
   switch (action.type) {
      case 'CREATE':
         return [...state, { ...action.payload, id: Math.floor(Math.random() * 10000) }]
      case 'UPDATE':
         return state.map(task => task.id !== action.payload.id ? task : action.payload)
      case 'DELETE':
         return state.filter(task => task.id !== action.payload)
      default: return state
   }
}