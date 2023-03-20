const router = require('express').Router()
const {getProfile, getProfileByUsername, getProfiles, updateProfile, followProfile, unfollowProfile} = require('../controllers/profile.controller')
const {isAuthenticatedUser} = require('../middleware/auth')
// const validate = require('../middleware/validate')

router.route('/follow/:userId')
      .post(isAuthenticatedUser,  followProfile)
      .delete(isAuthenticatedUser, unfollowProfile)

// router.get('/profiles', getProfiles)
router.route('/profile/:username').get(isAuthenticatedUser ,getProfileByUsername)
router.route('/profileById/:id').get(isAuthenticatedUser ,getProfile)

// router.patch('/:userId', auth('manageUsers', updateProfile))

module.exports = router
