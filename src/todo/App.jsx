import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonTodo from '../components/todo/button';
import Input from '../components/todo/input';
import List from '../components/todo/list';

const DivContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px black;
  padding: 10px;
`

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 1,
      work: ''
    };
  }

  changeWork = (e) => {
    let nameWork = e.target.value;
    if (nameWork !== '') {
      this.setState((state) => ({
        work: nameWork
      }));
    }
  }

  addWork = () => {
    this.setState({
      id: this.state.id + 1,
      todos: [...this.state.todos, {
        id_work: this.state.id,
        name_work: this.state.work,
        done: false
      }],
      work: ""
    })
  }

  deleteWork = (id) => {
    let newWork = this.state.todos.filter(todo => todo.id_work !== id);
    this.setState({
      ...this.state,
      todos: newWork
    })
  }

  checkWork = (id) => {
    let newTodos = this.state.todos.map(todo => todo.id_work === id ? {...todo, done: !todo.done} : todo);
    this.setState({
      ...newTodos,
      todos: newTodos
    })
  }

  render() {
    return (
      <>
        <DivContainer>
          <Input change={this.changeWork} work={this.state.work}/>
          <ButtonTodo add={this.addWork}>Add</ButtonTodo>
          <List 
            listWorks={this.state.todos}
            delete={this.deleteWork}  
            check={this.checkWork}
          />
        </DivContainer>
      </>
    )
  }
}

export default TodoApp;