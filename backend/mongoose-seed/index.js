'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  motto: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Organization = mongoose.model('Organization', organizationSchema);

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    // index: true
  },
  lastName: {
    type: String,
    required: true,
    // index: true
  },
  email: {
    type: String,
    required: true
  },
  orgHandle: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  starred: [{
    type: String
  }]
});
userSchema.index({ firstName: "text", lastName: "text" })
const User = mongoose.model('User', userSchema);

const ticketSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: [{
    type: Date
  }],
  tags: {
    type: Array,
    default: []
  },
  subscribed: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: false
  },
  lastUpdateSeenBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  updatedBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    default: "No Progress"
  },
  priority: {
    type: String,
    default: "Low"
  },
  dependsOn: {
    type: Array,
    default: []
  },
  blocks: {
    type: Array,
    default: []
  },
  startDate: {
    type: Date,
    default: undefined
  },
  endDate: {
    type: Date,
    default: undefined
  },
});
const Ticket = mongoose.model('Ticket', ticketSchema);

const tagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Tag = mongoose.model('Tag', tagSchema);

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket'
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const Comment = mongoose.model('Comment', commentSchema);



/**
 * Module dependencies.
 **/
var _ = require('lodash'),
    async = require('async'),
    // mongoose = require('mongoose'),
    chalk = require('chalk'),
    path = require('path');

function Seeder() {
  console.log("function Seeder()");
    this.connected = false;
    this.consoleLogEnabled = true;
}

function consoleLog(_this, message) {
    if (_this.consoleLogEnabled !== undefined && _this.consoleLogEnabled === true) {
        console.log(message);
    }
}

Seeder.prototype.setLogOutput = function (logOutput) {
    this.consoleLogEnabled = logOutput;
};

Seeder.prototype.connect = function(...params) {
  console.log("Seeder.prototype.connect = function(...params)");
    var _this = this;
    /*
		switch (mongoose.connection.readyState) {
			case 0 : Disconnected;
			case 1 : Connected;
			case 2 : Connecting;
			case 3 : Disconnecting;
		}
		source http://mongoosejs.com/docs/api.html#connection_Connection-readyState
	*/

    var db, cb, opts = null;

    if (params.length == 2) {
        db = params[0];
        cb = params[1];
    } else if (params.length == 3) {
        db = params[0];
        opts = params[1];
        cb = params[2];
    } else {
        console.error('Pass either 2 or 3 arguments to seeder.connect');
        process.exit(1);
    }
    
    mongoose.set("useCreateIndex", true);
    mongoose.set("useNewUrlParser", true);
  const dbConnectionOptions = {
    'useNewUrlParser': true,
    'useFindAndModify': false,
    'useCreateIndex': true,
    'useUnifiedTopology': true,
  };
    
    if (mongoose.connection.readyState === 1) {
        _this.connected = true;
        consoleLog(_this, 'Successfully initialized mongoose-seed');
        cb();
    } else {
        if (opts) {
            opts.useNewUrlParser = true;
        } else {
            opts = {
                useNewUrlParser: true
            };
        }

      mongoose.connect(db, dbConnectionOptions, function (err) {
            afterConnect(_this, err, cb);
        });
    }
};

function afterConnect(_this, err, cb) {
    // Log Error
    if (err) {
        console.error(chalk.red('Could not connect to MongoDB!'));
        consoleLog(_this, err);
    } else {
        _this.connected = true;
        consoleLog(_this, 'Successfully initialized mongoose-seed');
        cb();
    }
}



Seeder.prototype.loadModels = function(models) {
  // console.log("Seeder.prototype.loadModels = function(models) ");
  // // console.log(`models: ${models}`);

  // Object.keys(models).forEach(function(key) {
  //   const model = models[key];
  //   if (model instanceof Function) {
  //     console.log(`model is a function, and will be instantiated`);
  //     model();
  //   }
  // });


    // modelPaths.forEach(function(modelPath) {
    //     const model = require(path.resolve(modelPath));
    //   // console.log("var model = require(path.resolve(modelPath))");
    //   console.log(`const model = ${(path.resolve(modelPath))}`);
    //   console.log(" ")


    //     if (model instanceof Function) {
    //         console.log("model IS instanceof Function");
    //         model();
    //         console.log("model function instantiated");
    //         console.log(" ")
    //     }
    // });
};

Seeder.prototype.invalidModelCheck = function(models, cb) {
    var invalidModels = [];

    models.forEach(function(model) {
        if (_.indexOf(mongoose.modelNames(), model) === -1) {
            invalidModels.push(model);
        }
    });

    if (invalidModels.length) {
        cb(new Error('Models not registered in Mongoose: ' + invalidModels));
    } else {
        cb();
    }
};

Seeder.prototype.clearModels = function(models, cb) {
    if (!this.connected) {
        return new Error('Not connected to db, exiting function');
    }

    var modelNames = [];
    var _this = this;

    // Convert to array if not already
    if (Array.isArray(models)) {
        modelNames = models;
    } else if (typeof(models) === 'string') {
        modelNames.push(models);
    } else {
        console.error(chalk.red('Error: Invalid model type'));
        return;
    }

    // Confirm that all Models have been registered in Mongoose
    this.invalidModelCheck(modelNames, function(err) {
        if (err) {
            console.error(chalk.red('Error: ' + err.message));
            return;
        }

        // Clear each model
        async.each(modelNames, function(modelName, done) {
            var Model = mongoose.model(modelName);
            Model.deleteMany({}, function(err) {
                if (err) {
                    console.error(chalk.red('Error: ' + err.message));
                    return;
                }
                consoleLog(_this, modelName + 's collection cleared');
                done();
            });
        }, function(err) {
            // Final async callback
            if (err) {
                return;
            }
            cb();
        });
    });
};

Seeder.prototype.populateModels = function(seedData, cb) {
    if (!this.connected) {
        return new Error('Not connected to db, exiting function');
    }

    var modelNames = _.uniq(_.map(seedData, 'model'));
    var _this = this;

    // Confirm that all Models have been registered in Mongoose
    var invalidModels = this.invalidModelCheck(modelNames, function(err) {
        if (err) {
            console.error(chalk.red('Error: ' + err.message));
            return;
        }

        // Populate each model
        async.eachOf(seedData, function(entry, i, outerCallback) {
            var Model = mongoose.model(entry.model);
            async.eachOf(entry.documents, function(document, j, innerCallback) {
                Model.create(document, function(err) {
                    if (err) {
                        console.error(chalk.red('Error creating document [' + j + '] of ' + entry.model + ' model'));
                        console.error(chalk.red('Error: ' + err.message));
                    } else {
                        consoleLog(_this, 'Successfully created document [' + j + '] of ' + entry.model + ' model');
                    }
                    innerCallback();
                });
            }, function(err) {
                outerCallback();
            });
        }, function(err) {
            cb();
        });
    });
};

Seeder.prototype.disconnect = function () {
  mongoose.disconnect();
};

module.exports = new Seeder();
