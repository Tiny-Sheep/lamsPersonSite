const db = require('../server/db')
const { User, Post, Comment } = require('../server/db/models')
const { postData, userData, commentData } = require('./data')


const seed = async () => {
  await db.sync({
    force: true,
  });

  await Promise.all(commentData.map((comment) => {
    return Comment.create(comment);
  }));

  await Promise.all(userData.map((user) => {
    return User.create(user)
  }))

  await Promise.all(postData.map((post) => {
    return Post.create(post)
  }))

  const allUsers = await User.findAll()
  const allPosts = await Post.findAll()
  const allComment = await Comment.findAll()

  const allUserProm = allUsers.map((user, idx) => {
    return user.addPost(allPosts[idx])
  })

  const allPostProm = allPosts.map((post, idx) => {
    return post.addComment(allComment[idx])
  })

  const allCommentProm = allComment.map((comment, idx) => {
    return comment.setUser(allUsers[idx])
  })

  await Promise.all([...allUserProm, ...allPostProm, ...allCommentProm])

}



seed().catch((error) => {
  db.close();
  console.log(`

    Something unintended occurred:

    ${error.message}

    ${error.stack}

  `);
}).then(() => {
  db.close()
})
