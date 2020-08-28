/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    email: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string'
    },
    phoneno: {
      type: 'string',
      required: true

    },
    dob: {
      type: 'string', columnType: 'datetime'
    },
    address: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    status:{
      type:'boolean',
      defaultsTo:false

    },
  
    isAdmin: {
      type: 'boolean',
      defaultsTo:false

    },
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true, },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true, },
    
  },


  datastore: "mongodb"



};

