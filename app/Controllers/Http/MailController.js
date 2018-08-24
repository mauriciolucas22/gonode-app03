'use strict'

const Mail = use('Mail')

class MailController {
  async store ({ request }) {
    await Mail.raw('Jesus loves you!', (message) => {
      message.subject('ForgotPassword')
      message.from('mauricio.nq@hotmail.com')
      message.to('dddddd')
    })
  }
}

module.exports = MailController
