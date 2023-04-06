const router = require('express').Router()
const { getUser,loadUser, searchUser , getUserById, getUserByUsername, createUser, updateUser, deleteUser , logout} = require('../controllers/user.controller')
const {isAuthenticatedUser} = require('../middleware/auth')


router.route('/user').get(isAuthenticatedUser ,getUser)
router.route('/me').get(isAuthenticatedUser ,loadUser)
router.route('/searchUser').get(isAuthenticatedUser ,searchUser)
router.route('/logout').get(logout)
router.route('/user/:username').get(isAuthenticatedUser, getUserByUsername)

// router.get('/:userId', getUserById)
// router.post('/createUser', createUser)
// router.patch('/:userId', updateUser)
// router.delete('/:userId', deleteUser)

module.exports = router
