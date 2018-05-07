const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
 image: String,
 title: String,
 creator: String,
 pubDate: String,
 description: String,
 appleID: String,
 localID: String 
});

module.exports = mongoose.model('Podcast', PodcastSchema);