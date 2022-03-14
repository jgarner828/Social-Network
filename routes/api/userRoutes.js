const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/users/:UserId/reactions
router.route('/:UserId/reactions').post(addReaction);

// /api/users/:UserId/friends/:reactionId
router.route('/:UserId/friends/:friendId').delete(removeFriend);

module.exports = router;
