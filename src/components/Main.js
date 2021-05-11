import React, { Component} from 'react';
import './Main.css';

// Form
import { FaBeer } from 'react-icons/fa';

export default class Main extends Component{
state = {
      novaTarefa: '',
    };

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value,
    });

  }

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            < FaBeer/>
          </button>
        </form>
      </div>
    )
  }
}
