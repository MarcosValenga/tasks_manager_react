import React, { Component } from 'react';

import './Main.css';

// Form
import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component {
  // Váriveis de estados, basicamente sao como as variaveis observaveis
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  /**
   *  Carrega os componentes e executa a funcao,
   *  semelhante ao initState
   *
   */
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;
    this.setState({
      tarefas
    });
  }

  /**
   *
   * @param {pega a propriedade anterior} prevProps
   * @param {pega o estado anterior} prevState
   * @returns
   */
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  /**
   *  função que verifica o envio do submit,
   *  adicionando nova tarefa.
   *
   * @param {e: evento} e
   * @returns void
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 || novaTarefa === '') return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      })
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      })
    }
  }

  /**
   * Funçao que verifica mudanças no input,
   *
   * @param {*} e
   */
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }


  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    });
  }

  /**
   *
   * Deleta as tarefas registradas
   *
   * @param {*} e
   * @param {*} index
   */
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  render() {
    // Desestruturação da váriaveis de estado
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />

      </div>
    );
  }
}
