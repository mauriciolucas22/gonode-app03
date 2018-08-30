'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')
const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {
  // dirty contem as informações que foram alteradas
  if (taskInstance.user_id && !taskInstance.dirty.user_id) return

  const { email, username } = await taskInstance.user().fetch() // fetch vai trazer o user relacionado
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

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
