const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://vasusharma1768934:Tranquility123@cluster0.axfj8yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => {
		console.error('MongoDB connection error:', err);
		process.exit(1);
	});

// Update UserInfo schema for admin columns
const UserInfoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	called: { type: String, default: 'Not Yet' },
	interested: { type: String, default: 'Not Yet' }
}, { timestamps: true });

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

// API endpoint to store user info
app.post('/api/store-user-info', async (req, res) => {
	const { name, phone } = req.body;
	if (!name || !phone) {
		return res.status(400).json({ error: 'Name and phone are required.' });
	}
	try {
		await UserInfo.create({ name, phone });
		res.status(200).json({ message: 'User info stored successfully.' });
	} catch (err) {
		res.status(500).json({ error: 'Failed to store user info.' });
	}
});

// API endpoint to get all user info (for admin leads page)
app.get('/api/store-user-info', async (req, res) => {
	try {
		const users = await UserInfo.find().sort({ createdAt: -1 });
		res.json({ users });
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch users.' });
	}
});

// Admin: Get all leads
app.get('/api/admin/leads', async (req, res) => {
	try {
		const leads = await UserInfo.find().sort({ createdAt: -1 });
		res.json({ leads });
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch leads.' });
	}
});

// Admin: Update lead status
app.patch('/api/admin/leads/:id', async (req, res) => {
	const { id } = req.params;
	const { called, interested } = req.body;
	try {
		const update = {};
		if (called !== undefined) update.called = called;
		if (interested !== undefined) update.interested = interested;
		await UserInfo.findByIdAndUpdate(id, update);
		res.json({ message: 'Lead updated.' });
	} catch (err) {
		res.status(500).json({ error: 'Failed to update lead.' });
	}
});

// Health check
app.get('/', (req, res) => {
	res.send('Server is running on port 5000');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
