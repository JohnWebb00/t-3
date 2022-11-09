var mongoose = require("mongoose")
var Schema = mongoose.Schema

var bookingRequestSchema = new Schema({
request_id : {type : String, unique: true},
user_id : {type: String},
dentist_id : {type: Schema.Types.ObjectId, ref: 'Dentist'},
issuance : {type: String, unique: true},
date : {type: Date, default: Date.now()}
});

module.exports = mongoose.model('BookingRequests', bookingRequestSchema)