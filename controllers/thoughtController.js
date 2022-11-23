const Thought = require('../models/Thought');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req,res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(() => res.json({ message: "Thought deleted"}))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req,res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { ...req.body }, { $set: req.body },
        { runValidators: true, new: true } )
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  }
};