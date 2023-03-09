const router = require('express').Router()
const {getProfile, getProfiles, updateProfile, followProfile, unfollowProfile} = require('../controllers/profile.controller')
const auth = require('../middleware/auth')
// const validate = require('../middleware/validate')

router.route('/follow/:userId')
      .post(auth(),  followProfile)
      .delete(auth(), unfollowProfile)

router.get('/profiles', getProfiles)
router.get('/:userId', getProfile)
router.patch('/:userId', auth('manageUsers', updateProfile))

module.exports = router
