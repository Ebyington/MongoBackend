const router = require('express').Router();

const { 
    getUsers, getSingleUser, createUser, deleteUser, updateUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
// router.route('/:userId/').get(getUsers).post(createUser);
// router.route('/:userId/update').get(getUsers);

module.exports = router;


// {
// 	"username": "rickybob",
// 	"email": "rick@bob.com"
// }