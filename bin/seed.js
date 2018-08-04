const db = require('../server/db')
const { User, Post, Comment } = require('../server/db/models')
const { postData, userData, commentData } = require('./data')


const seed = async () => {
  await db.sync({
    force: true,
  });

  await Promise.all(commentData.map((comment) => {
    console.log("what is this comment", comment);
    return Comment.create({ ...comment });
  }));
};


seed().catch((error) => {
  db.close();
  console.log(`

    Something unintended occurred:

    ${error.message}

    ${error.stack}

  `);
});
