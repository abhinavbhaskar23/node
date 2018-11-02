import * as mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
    Id: Number,
    name: String,
    status: String
});

const state = mongoose.model('state', stateSchema);

export default state;