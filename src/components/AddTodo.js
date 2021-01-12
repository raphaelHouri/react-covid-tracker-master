import React, { Component } from "react";
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state={
        title:''
    }
    onSubmit =(e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    onChange= (e)=> this.setState({
        title:e.target.value
    });
  render() {
    return (
      <form onSubmit= {this.onSubmit} style = {{display:'flex'}}>
        <input 
            type="text"
            name="title"
            placeholder="Add Todo ..."
            style = {{flex: 10, padding:'5px'}}
            value={this.state.title} 
            onChange={this.onChange} /> 
        <input className="btn-info" type="submit" value="Submit"  style={{flex: 1}}/>
      </form>
    );
  }
}
AddTodo.propTypes={
  addTodo: PropTypes.func.isRequired

}
export default AddTodo;