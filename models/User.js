const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        // trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thought:[{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
},
{
  toJSON: {
    getters: true,
    virtuals: true,
      },
      id: false,
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
const User = model("User", userSchema);
module.exports = User;