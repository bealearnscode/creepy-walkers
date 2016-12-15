import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

var HighScoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    //who got the score
    from: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "User",
    	required: true
    }
});

module.exports = mongoose.model('HighScore', HighScoreSchema);