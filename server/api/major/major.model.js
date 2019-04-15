import mongoose from 'mongoose';
//I'll make some socket work too.

const MajorSchema = new mongoose.Schema({
    name: String,
    keyImage: String,
    scale: Array
});

//validations
const hasScaleLength = scale => scale.length === 7;

MajorSchema
    .path('scale')
    .validate(hasScaleLength);

export default mongoose.model('Major', MajorSchema);