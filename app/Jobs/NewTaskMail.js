'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

class NewTaskMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.

  // quanto jobs quero processar simultaneamente
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  // gerada automaticamente, nome do job
  static get key () {
    return 'NewTaskMail-job'
  }

  // This is where the work is done.
  // logica para envio, no caso no email
  async handle ({ email, username, title, file }) {
    console.log(`Job: ${NewTaskMail.key}`)

    await Mail.send(
      ['emails.new_task'],
      { username, title, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from('mauricio.nq@hotmail.com', 'Mauricio')
          .subject('Nova tarefa para voçê')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail
