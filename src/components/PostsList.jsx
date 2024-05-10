/** @format */

import { useState } from 'react'
import Modal from './Modal'
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  let modalContent
  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      </Modal>
    )
  }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Sebas" body="How can I help you, Sir?" />
      </ul>
    </>
  )
}

export default PostsList
