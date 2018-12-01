import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: String,
  createdAt: Number,
  updatedAt: Number
});

class User {
  constructor() {
    this.User = mongoose.model('user', userSchema, 'user');
  }

  create(user) {
    let now = Date.now();
    user.createdAt = now;
    user.updatedAt = now;

    let newUser = new this.User(user);
    return newUser.save();
  }

  getByEmail(email) {
    return this.User.findOne({
      email
    });
  }
}

export default User;
