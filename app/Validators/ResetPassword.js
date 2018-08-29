'use strict'

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed' // confirmed=passord_confirmation
    }
  }
}

module.exports = ResetPassword
