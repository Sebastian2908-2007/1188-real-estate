import mongoose from "mongoose";
const {Schema, model} = mongoose;
import dayjs from "dayjs";
const noteSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
        get: timeStamp => dayjs(timeStamp).format('M/DD/YYYY')
    },
    noteText:{
        type: String,
        required: true,
        trim: true,
    }
});

const Note = mongoose.models.Note || model('Note', noteSchema);

module.exports = Note;