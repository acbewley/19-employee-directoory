const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    first: {
      type: String
    },
    last: {
      type: String
    }
  },
  email: {
    type: String
  },
  dob: {
    date: {
      type: Date
    },
    age: {
      type: Number
    }
  },
  picture: {
    medium: {
      type: String
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;