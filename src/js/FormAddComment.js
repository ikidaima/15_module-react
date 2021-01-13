import React from 'react';

class FormAddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      author: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addComment(this.state.comment, this.state.author);
    this.setState({
      comment: '',
      author: ''
    });
  }

  render() {
    return (
      <form 
        className='comments__form form'
        onSubmit={this.handleSubmit}
      >
        <label className='form__comment'>
          Комментарий:&nbsp;
          <textarea 
            className='form__textarea' 
            name='comment' 
            value={this.state.comment}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Имя автора:&nbsp;
          <input
            name='author'
            type='text'
            value={this.state.author}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type='submit'>Добавить</button>
      </form>
    );
  }
}
export default FormAddComment;