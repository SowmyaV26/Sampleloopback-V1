'use strict';

module.exports = function(Empdetails) {
    Empdetails.userDetails = function(userName,password,callback){
        Empdetails.create({
            userName: userName,
            password: password
        },function(err,result){
            callback(null,err||'success')
        });
    };

    Empdetails.remoteMethod('userDetails',{
        accepts: [
            {
              arg: 'userName',
              type: 'string',
              required: true,
              http: {
                source: 'form',
              },
            },
            {
                arg: 'password',
                type: 'string',
                required: true,
                http: {
                  source: 'form',
                },
            },
        ],
        returns: {
            arg: 'data',
            type: 'object',
            root: true,
          },
          http: {
            path: '/userDetails',
            verb: 'POST',
          },
          description: 'API to save the user details.',
    
    });
};


