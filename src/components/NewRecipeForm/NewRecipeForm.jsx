import { Component } from 'react';

export default class NewRecipeForm extends Component {
  state = {
    title: '',
    instructions: '',
    prepTime: '',
    ingredients: '',
  }
    
  handleChange = async(e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  }

  handleSubmit = async (evt) => {

    const recipesAPI = require('../../utilities/recipes-api')
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const recipe = await recipesAPI.add(formData);
      console.log(recipe)

    } catch {
      // Invalid signup
      this.setState({
        error: 'Error Adding Recipe - Try Again'
      });
    }
  }


  render() {
    
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.title} onChange={this.handleChange}></input>
          <label>Prep. Time:</label>
          <input type="text" name="instructions" value={this.instructions} onChange={this.handleChange}></input>
          <label>Instructions:</label>
          <textarea name="prepTime" value={this.prepTime} onChange={this.handleChange}></textarea>
          <label>Ingredients:</label>
          <input name="ingredients" value={this.ingredients} onChange={this.handleChange}></input>
          <button type="reset">Clear</button>
          <button type="submit">Add Recipe</button>
        </form>
      </main>
    );
  }
}