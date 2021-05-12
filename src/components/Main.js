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

    ],
    };


  handleSubmit = (e) =>{
    e.preventDefault();
    const{ tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) != -1) return;
    const novaTarefas = [ ...tarefas];

    this.setState({
      tarefas: [ ...novaTarefas, novaTarefa],
    })
  }

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

        <form onSubmit={this.handleSubmit} action="#" className="form">
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
              <span>
                <FaWindowClose className="close" />
                <FaEdit className="edit" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
