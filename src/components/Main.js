import React, { Component} from 'react';
import './Main.css';

// Form
import { FaBeer } from 'react-icons/fa';
// Form
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component{
state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,

    };
  componentDidMount (){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({tarefas});
  }
  componentDidUpdate(prevProps, prevState){
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const{ tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novaTarefas = [ ...tarefas];

    if(index === -1){
      this.setState({
        tarefas: [ ...novaTarefas, novaTarefa],
        novaTarefa: '',
      })
    } else {
      const novasTarefas = [ ...tarefas];
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [ ...novasTarefas],
        index: -1,
      })
    }

  }

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  handleDelete = (e, index) => {
    const {tarefas} = this.state;
    const novasTarefas = [ ...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [ ...novasTarefas],
    })

  }
  handleEdit = (e, index) => {
      const { tarefas } = this.state;

      this.setState ({
        index,
        novaTarefa: tarefas[index],
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
          {tarefas.map((tarefa, index) =>(
            <li key={tarefa} className="li">
              {tarefa}
              <span>
                <FaWindowClose
                className="close"
                onClick={(e) => this.handleDelete(e, index)}


                />
                <FaEdit
                className="edit"
                onClick={(e) => this.handleEdit(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
