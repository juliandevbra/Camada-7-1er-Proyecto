import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Julian',
            age: 29,
            country: 'Argentina'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        if(this.state.name === 'Julian'){
            this.setState({name: 'Bianca'})
        } else {
            this.setState({name: 'Julian'})
        }
        
    }
  render() {
      console.log(this.state)
    return (
      <div>
          <h2>{this.state.name}</h2>
          <button onClick={this.changeName}>Cambiar nombre</button>
      </div>
    )
  }
}
