'use strict';

module.exports = function(app) {

    app.dataSources.sampleDS.automigrate('Registeruser', function(err) {
        if (err) throw err;
    
        app.models.CoffeeShop.create([{
          userName: 'pujitha',
          password: 'admin'
        }, {
            userName: 'mahesh',
            password: 'admin'
        }, {
            userName: 'rakesh',
            password: 'admin'
        }], function(err, Registerusers) {
          if (err) throw err;
    
          console.log('Models created: \n', Registerusers);
        });
      });
};
