const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  createReaction,
  removeFriend,
  addFriend,
  updateUsername
} = require('../../controllers/UserController');




// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser).put(updateUsername);

// /api/users/:UserId/reactions
router.route('/:UserId/reactions').post(createReaction);

// /api/users/:UserId/friends/:reactionId
router.route('/:UserId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
