/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */
module.exports.policies = {
   // Everything resctricted here
  'UsersController': { // Name of your controller
  'create': true,// We dont need authorization here, allowing public access

  // Allow anyone to access the login action, even if they're not logged in.
  },
  'AuthController':{
    'login':true
  }
 

    // Only allow admin users to delete other users
    // (runs the policy in api/policies/isAdmin.js)
   


 };
 
