import './Card.css'

const Card = ({pizza}) => {
  return (
    <div key={pizza.id} className='card'>
      <img src={pizza.img} alt='' className="card-img"/>
      <h3 className="card-title">{pizza.tipo}</h3>
      <h4 className="card-price">{pizza.precio}</h4>
    </div>
  )
}

export default Card

