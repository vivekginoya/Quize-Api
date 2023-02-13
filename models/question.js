const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const questionSchema = new Schema({
    category:{ type: Schema.Types.ObjectId, ref: 'category' }, // category ==== collection name
    question:String,
    answer:String,
    options:Array
});

const Question = mongoose.model('question', questionSchema);
module.exports = Question