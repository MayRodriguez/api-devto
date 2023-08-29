const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /\.(jpg|png|gif|jpeg)$/i.test(value);
      },
      message: "La URL de la imagen debe ser un arhivo jpg o png"
    }
  },  
  body: {
    type:String,
    required: true,
    minLength: 1,
    maxLength: 2000,
    trim: true,
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, ref: "User" 
},
created: {
    type: Date,
    required: true,
    default: new Date(),
  },
updated: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("Post", postSchema);
