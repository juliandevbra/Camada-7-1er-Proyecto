import './App.css'
import Card from './components/Card'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

export default function App() {
  
  let elementos = [45,87,30]

  return (
    <>
      <ClassComponent/>
      <FuncComponent/>
      <Card elemento={elementos[0]}/>
      <Card elemento={elementos[1]}/>
      <Card elemento={elementos[2]}/>
    </>
  )
}


