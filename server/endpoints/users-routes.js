import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import User from '../schemas/user';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import strategy from './passport-strategy';

const usersRouter = express.Router();
passport.use(strategy);
usersRouter.use(passport.initialize());

//Get all the users from the db
usersRouter.get('/', passport.authenticate("basic", {session: false}), function(req, res) {
	User.find({}, function(err, users) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json(users);
	});
});

//login (might not need it)
// usersRouter.post('/login', jsonParser, passport.authenticate("basic", {session: false}), function(req, res) {
// 	let username = req.body.username;
// 	let password = req.body.password;

// 	User.findOne({username: username}, function(err, user) {
// 		if(!user) return res.sendStatus(401);

// 		user.validatePassword(password, function(err, isValid) {
// 			if(err) {
// 				console.log(err);
// 				return res.status(500).json({message: "Internal server error"});
// 			}

// 			return res.status(200).json({});
// 		});
// 	});
// });

//create a new user (registering)
usersRouter.post('/', jsonParser, function(req, res) {
	//check if the proper fields are in place
	if(!req.body) {
		return res.status(400).json({message: "No request body"});
	}

	if(!("username" in req.body)) {
		return res.status(422).json({message: "Missing field: username"});
	}

	if(!("password" in req.body)) {
		return res.status(422).json({message: "Missing field: password"});
	}

	//username stuff
	let username = req.body.username;

	if(typeof username !== "string") {
		return res.status(422).json({message: "Incorrect field type: username"});
	}

	username = username.trim();

	if(username === "") {
		return res.status(422).json({message: "Incorrect field length: username"});
	}

	//password stuff
	let password = req.body.password;

	if(typeof password !== "string") {
		return res.status(422).json({message: "Incorrect field type: password"});
	}

	password = password.trim();

	if(password === "") {
		return res.status(422).json({message: "Incorrect field length: password"});
	}

	//let's get salty
	bcrypt.genSalt(10, function(err, salt) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		//let's get hashy
		bcrypt.hash(password, salt, function(err, hash) {
			if(err) {
				console.log(err);
				return res.status(500).json({message: "Internal server error"});
			}

			//make a user object, pass in hash to actually hash
			var user = new User({
				username: username,
				password: hash,
			});

			//create and save the user
			user.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({message: "Internal server error"});
				}

				return res.status(201).json({});
			});
		});
	});	
});

//delete a dude using passport strategy
usersRouter.delete('/:userId', passport.authenticate("basic", {session: false}), function(req, res) {
	let theUser = req.params.userId;

	User.findByIdAndRemove(theUser, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json({});
	});
});

module.exports = usersRouter;