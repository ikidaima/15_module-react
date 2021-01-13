import React from 'react';
import CommentList from './CommentList';
import FormAddComment from './FormAddComment';
import refreshLocalStorage from './refreshLocalStorage';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      comments: props.comments
    }
  }

  deleteComment(id) {
    this.setState(state => {
      delete state.comments[id];
      refreshLocalStorage(this.props.keyLocalStorage, state.comments);

      return {
        comments: state.comments
      }
    });
  }

  addComment(comment, author) {
    this.setState(state => {
      const timeOfCreate = Date.now();

      state.comments[timeOfCreate] = {
        id: timeOfCreate,
        author: author,
        comment: comment,
        date: (new Date(timeOfCreate)).toJSON()
      };
      refreshLocalStorage(this.props.keyLocalStorage, state.comments);

      return {
        comments: state.comments
      }
    })
  }

  render() {
    return (
      <section className='comments'>
        <h2 className='comments__heading'>15 модуль, React</h2>
        <FormAddComment addComment={this.addComment}/>
        <CommentList comments={this.state.comments} class='comments__list' deleteComment={this.deleteComment} />
      </section>
    )
  }
}

export default Comments;