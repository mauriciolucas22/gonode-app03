'use strict'

const User = use('App/Models/User')

// ctx = contexto da request => { request, response }
class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const user = await User.create(data)

    await user.addresses().createMany(addresses)

    return user
  }
}

module.exports = UserController
