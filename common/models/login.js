'use strict';

module.exports = function(login) {

    login.loginwithpassword = function(username,password,callback)
    {

    }
};

login.remotemethod('loginwithpassword',{
accepts: [
    {
        arg: 'username',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'password',
        type: 'string',
        http: {
          source: 'form',
        },
      },
],
returns: [
    {
        arg: 'data',
        type: 'object',
        root: true,
      },
],
http: {
    path: '/loginwithpassword',
    verb: 'POST',
  },
  description: 'API to login with password, returns access token',

});
