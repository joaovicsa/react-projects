/** @format */

import Modal from './Modal'
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
   const [enteredBody, setEnteredBody] = useState('')
   const [enteredAuthor, setEnteredAuthor] = useState('')

   function bodyChangeHandler(event) {
     setEnteredBody(event.target.value)
   }

   function authorChangeHandler(event) {
     setEnteredAuthor(event.target.value)
   }
  return (
    <>
      <Modal>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      </Modal>
      <ul className={classes.posts}>
        <Post author="João" body="This is React.js!" />
        <Post author="Sebas" body="How can I help you, Sir?" />
      </ul>
    </>
  )
}

export default PostsList
