const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./models/Bootcamp');

// connect to db

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

// Read JSON files
const bootcamps = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
	try {
		await Bootcamp.create(bootcamps);
		console.log('Data Imported....'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(err);
	}
};

// Delete data
const deleteData = async () => {
	try {
		await Bootcamp.deleteMany();

		console.log('Data deleted...'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(err);
	}
};

if (process.argv[2] === '-1') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
