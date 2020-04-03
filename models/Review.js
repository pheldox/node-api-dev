const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please add a reveiw title']
	},
	text: {
		type: String,
		required: [true, 'Please add some text']
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bootcamp',
		required: true
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	}
});

module.exports = mongoose.model('Review', ReviewSchema);
