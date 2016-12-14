import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: String,
    game: [{
        win : Number,
        loss : Number,
        score: Number

    }],

    auth:{
        id: String,
        displayName: String
    }

});
