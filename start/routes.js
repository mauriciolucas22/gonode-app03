'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

// Rotas somente quando user logado
Route.group(() => {
  Route.post('/files', 'FileController.store')

  // apiOnly exclui os metodos create and edit
  // uma linha para todas as rotas
  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
