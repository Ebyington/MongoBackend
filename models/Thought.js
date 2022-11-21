const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            max_length: 280,
            min_length: 1,
            required: true,


        }, 
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions:
            [reactionSchema] 
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;