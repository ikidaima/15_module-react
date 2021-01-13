import React from 'react';

function CommentList(props) {
  const comments = Object.values(props.comments);

  return (
    <ul className='comments__list'>
      {
        comments.map(elem => {
          return (
            <li key={elem.id} className='comments__item comment-item'>
              <p className='comment-item__text'>{elem.comment}</p>
              <div className='comment-item__information'>
                <span>{elem.author}</span>
                <time dateTime={elem.date}>{ (new Date(elem.date)).toLocaleString() }</time>
              </div>
              <button 
                className='comment-item__close' 
                type='button' 
                aria-label='Закрыть'
                onClick={ () => props.deleteComment(elem.id) }>
              </button>
            </li>
          );
        })
      }
    </ul>
  )
}

export default CommentList;