import React, { useState } from 'react';

function FormAddComment(props) {
  let [comment, setComment] = useState('');
  let [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    props.addComment(comment, author);
    setComment('');
    setAuthor('');
  };
  const handleChange = (event, setState) => {
    setState(event.target.value);
  };
  
  return (
      <form 
        className='comments__form form'
        onSubmit={handleSubmit}
      >
        <label className='form__comment'>
          Комментарий:&nbsp;
          <textarea 
            className='form__textarea' 
            name='comment' 
            value={comment}
            onChange={e => handleChange(e, setComment)}
            required
          />
        </label>
        <label>
          Имя автора:&nbsp;
          <input
            name='author'
            type='text'
            value={author}
            onChange={e => handleChange(e, setAuthor)}
            required
          />
        </label>
        <button type='submit'>Добавить</button>
      </form>
  )
}

export default FormAddComment;