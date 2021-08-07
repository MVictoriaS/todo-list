import React, { Component } from "react";
import { List } from "../List/List";
import { Input } from "../Input/Input";
import  {Button}  from "../Button/Button";// desde un obj con llaves
import Footer from "../Footer/Footer";//default sin llaves
import Header from "../Header/Header";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Read book", done: true },
      { id: 2, name: "Write letter", done: false },
      { id: 3, name: "Edit cover", done: false }
    ],
    todoText: ""
  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: ""
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <div>
        <Header />
        <Input value={todoText} onChange={this.onChangeInput} />
        <Button onClick={this.onSubmitTodo}>Submit</Button>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
        />
        <Footer />
      </div>
    );
  }
}

