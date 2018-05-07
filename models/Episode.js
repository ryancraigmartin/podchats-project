const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
 imgURL: String,
 title: String,
 pubDate: String,
 description: String,
 episodeID: Number,
 // localEpisodeID: String 
 episodeScore: Number
});

module.exports = mongoose.model('Episode', EpisodeSchema);