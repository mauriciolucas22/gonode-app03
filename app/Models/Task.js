'use strict'

const Model = use('Model')

// informa as recerencias
class Task extends Model {
  project () {
    return this.belongsTo('App/Models/Projects')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Task
