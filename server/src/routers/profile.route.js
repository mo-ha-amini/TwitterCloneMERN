const router = require('express').Router()
const {getProfile, getProfileByUsername, getProfiles, updateProfile, followProfile, unfollowProfile} = require('../controllers/profile.controller')
const {isAuthenticatedUser} = require('../middleware/auth')
// const validate = require('../middleware/validate')

// router.route('/follow/:userId')
//       .post(auth(),  followProfile)
//       .delete(auth(), unfollowProfile)

// router.get('/profiles', getProfiles)
router.route('/profile/:username').get(isAuthenticatedUser ,getProfileByUsername)
// router.patch('/:userId', auth('manageUsers', updateProfile))

module.exports = router
