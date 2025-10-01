import React from 'react'
import './index.css'
import { Todo } from './components/todo'

export const App = () => {
  return (
    <div className="bg-gray-900 pt-20 min-h-screen">
    
      <Todo />
    </div>
  )
}

export default App