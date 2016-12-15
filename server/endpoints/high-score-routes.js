import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import HighScore from '../schemas/highscore';
import User from '../schemas/user';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import strategy from './passport-strategy';

const highScoreRouter = express.Router();
passport.use(strategy);
highScoreRouter.use(passport.initialize());

//Get all the high scores
highScoreRouter.get('/', passport.authenticate("basic", {session: false}), function(req, res) {
	HighScore.find({}, function(err, scores) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json(scores);
	});
});

//Post a new score
highScoreRouter.post('/', jsonParser, passport.authenticate("basic", {session: false}), function(req, res) {
	//check if the proper fields are in place
	if(!req.body) {
		return res.status(400).json({message: "No request body"});
	}

	if(!("score" in req.body)) {
		return res.status(422).json({message: "Missing field: score"});
	}

	if(!("from" in req.body)) {
		return res.status(422).json({message: "Missing field: from"});
	}

	let score = req.body.score;
	let fromUser = req.body.from;

	User.findOne({username: fromUser}, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		let newScore = new HighScore({
			score: score,
			from: user.username
		});

		newScore.save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({message: "Internal server error"});
			}

			return res.status(201).json({});
		})
	})
})

module.exports = highScoreRouter;