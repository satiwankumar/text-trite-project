/**
 * Feedback.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
    
      autoIncrement: true,
    },
    subject: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    user:{
      model:'Users'
    },
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true, },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true, },
    

  },

  datastore: "mongodb"
};

