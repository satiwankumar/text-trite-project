/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/



  // '/': { view: 'pages/login' },

  '/login': [
    { policy: 'forceDashboard' },
    { view: 'pages/login' }
],'/': [
  { policy: 'forceDashboard' },
  { view: 'pages/login' }
],
  '/Register': { view: 'pages/register' },
  '/adduser': [ { view: 'AddUser' } ],
  '/feedback': [ { view: 'ListFeedback'}],
  '/feedbackdetail': [{ view: 'pages/feedbackdetail' }],
  
  
//UserController Routes  
'GET /users' :'UsersController.list',
'GET /users/edit/:id' :'UsersController.edit',
'POST /users/create' :'UsersController.create',
'POST /users/delete/:id' :'UsersController.delete',
'GET /dashboard':  'UsersController.dashboard' ,

  

//auth routes
'POST /auth/login'  :'AuthController.login',
'GET /auth/logout'  :'AuthController.logout',



//Feedback routes
'GET /user/feedback'  :'FeedbackController.list',
'GET /user/feedback/edit/:id' :'FeedbackController.edit',
'POST /user/feedback'  :'FeedbackController.create',
'POST /user/feedback/delete/:id' :'FeedbackController.delete',




  



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
