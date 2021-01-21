import React, { useState } from 'react';
import CommentList from './CommentList';
import FormAddComment from './FormAddComment';
import refreshLocalStorage from './refreshLocalStorage';

function Comments(props) {
  const [comments, setComments] = useState(props.comments);

  const addComment = (comment, author) => {
    setComments(prevState => {
      const timeOfCreate = Date.now();
      const newState = {
        ...prevState,
        [timeOfCreate]: {
          id: timeOfCreate,
          author: author,
          comment, comment,
          date: (new Date(timeOfCreate)).toJSON()
        }
      };

      refreshLocalStorage(props.keyLocalStorage, newState);

      return newState;
    });
  };
  const deleteComment = id => {
    setComments(prevState => {
      const newState = {...prevState}
      delete newState[id];
      refreshLocalStorage(props.keyLocalStorage, newState);

      return {...newState};
    })
  }

  return (
    <section className='comments'>
      <h2 className='comments__heading'>15 модуль, React</h2>
      <FormAddComment addComment={addComment} />
      <CommentList comments={comments} className='comment__list' deleteComment={deleteComment} />
    </section>
  )
}

export default Comments;