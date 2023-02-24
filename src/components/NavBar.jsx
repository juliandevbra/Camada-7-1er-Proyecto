const NavBar = () => {

    let titulos = ['Home', 'Catalogo', 'About us', 'Contacto']

  return (
    <>
        <ul>
            {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
        </ul>
    </>
  )
}

export default NavBar