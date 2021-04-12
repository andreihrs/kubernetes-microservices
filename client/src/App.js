import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

const App = () => {
  return (
    <div className="container">
      <h1>Hi</h1>
      <h2>YEAAAH</h2>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  )
}

export default App;