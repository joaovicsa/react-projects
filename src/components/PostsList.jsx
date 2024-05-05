/** @format */

import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="João" body="This is React.js!" />
      <Post author="Sebas" body="How can I help you, Sir?" />
    </ul>
  )
}

export default PostsList
