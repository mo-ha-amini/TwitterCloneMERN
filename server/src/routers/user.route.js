const router = require('express').Router()
const { getUser, getUserById, createUser, updateUser, deleteUser , logout} = require('../controllers/user.controller')
const {isAuthenticatedUser} = require('../middleware/auth')


router.route('/user').get(isAuthenticatedUser ,getUser)
router.route('/logout').get(logout)
// router.get('/:userId', auth('getUser'), getUserById)
// router.post('/createUser', auth('manageUsers'), createUser)
// router.patch('/:userId', auth('manageUsers'), updateUser)
// router.delete('/:userId', auth('manageUsers'), deleteUser)

module.exports = router
