import React from 'react';
import axios from 'axios';

export default class RemoveConfirm extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
     
        <form onSubmit={this.handleSubmit}>
          <label style={{ flex: '1' }}>
            DNI del usuario a borrar :
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button  type="submit">Delete</button>
        </form>

    )
  }
}