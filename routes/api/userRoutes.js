const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addAssignment,
  removeAssignment,
} = require('../../controllers/UserController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/Users/:UserId/reactions
router.route('/:UserId/reactions').post(addAssignment);

// /api/Users/:UserId/reactions/:reactionId
router.route('/:UserId/reactions/:reactionId').delete(removeAssignment);

module.exports = router;
