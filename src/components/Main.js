import React, { Component} from 'react';
import './Main.css';

// Form
import { FaBeer } from 'react-icons/fa';
// Form
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component{
state = {
      novaTarefa: '',
      tarefas: [
      'Beber café',
      'Beber água',
      'Estudar',
    ],
    };

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value,
    });

  }

  render() {
    const { novaTarefa, tarefas } = this.state;

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

        <ul className="tarefas">
          {tarefas.map((tarefa) =>(
            <li key={tarefa} className="li">
              {tarefa}
              <div>
                <FaWindowClose className="close" />
                <FaEdit className="edit" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
