const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const UserInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  called: { type: String, default: 'Not Yet' },
  interested: { type: String, default: 'Not Yet' }
}, { timestamps: true });

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

async function deleteNonAdminUsers() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Adjust the admin criteria as needed
    const adminName = 'admin'; // Change as per your admin user name
    const adminPhone = '7011565542'; // Change as per your admin phone

    const result = await UserInfo.deleteMany({
      $and: [
        { name: { $ne: adminName } },
        { phone: { $ne: adminPhone } }
      ]
    });

    console.log(`Deleted ${result.deletedCount} non-admin users.`);
    process.exit(0);
  } catch (err) {
    console.error('Error deleting non-admin users:', err);
    process.exit(1);
  }
}

deleteNonAdminUsers();
