var mongoose = require('mongoose');

mongoose.connect('mongodb://10.140.0.4:27017/firstapp', {
  useMongoClient: true
});