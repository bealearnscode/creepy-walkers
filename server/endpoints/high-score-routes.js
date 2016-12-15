import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import HighScore from '../schemas/highscore';
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

module.exports = highScoreRouter;