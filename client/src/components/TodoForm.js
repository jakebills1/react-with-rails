import React, { Component, } from 'react';
import { Form, Button, } from 'semantic-ui-react';
class TodoForm extends Component {
  state = { name: "", }
  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // TODO call function to make post request
    this.props.add(this.state.name);
    this.setState({ name: "", })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        label="Todo"
        placeholder="Add A Todo"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
        <Button>Add Todo</Button>
      </Form>
    )
  }
}
export default TodoForm;