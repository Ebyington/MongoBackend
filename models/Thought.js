const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            max_length: 280,
            min_length: 1,
            required: false,
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: false,
        },
        reactions:
            [reactionSchema] 
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
      },
      id: false,
    }
  );
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;