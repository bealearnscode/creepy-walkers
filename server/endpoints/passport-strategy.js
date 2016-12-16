import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import User from '../schemas/user';

const strategy = new BasicStrategy(function(username, password, callback) {
	User.findOne({username: username}, function(err, user) {
		if(err) {
			return callback(err);
		}

		if(!user) {
			return callback(null, false, {
				message: "Incorrect username."
			});
		}

		user.validatePassword(password, function(err, isValid) {
			if(err) {
				return callback(err);
			}

			if(!isValid) {
				return callback(null, false, {
					message: "incorrect password."
				});
			}

			return callback(null, user);
		});
	});
});

module.exports = strategy;