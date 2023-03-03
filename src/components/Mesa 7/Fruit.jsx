import { useState } from "react";
// import './FuncComp.css'

const Fruit = () => {
  const [fruits, setFruit] = useState(['Banana', 'Manzana','Durazno']);
//   const [valor, setValor] = useState();
const [index, setIndex] = useState(0)

  const addFruit = () =>{
      setFruit([...fruits, fruits[index]])
      if(index === fruits.length - 1) setIndex(0)
      else setIndex(index + 1)
  }

  return (
    <>
      <div className="container">
        <ul>
            {fruits.map((fruit, index) =>(
             <li key={index} className="fruitList"><span>La fruta {fruit} se añadió a la lista</span></li>
            ))}
        </ul>
        <button onClick={addFruit} className="buttonAdd">Agregar una fruta</button>
      </div>
    </>
  );
};

export default Fruit;