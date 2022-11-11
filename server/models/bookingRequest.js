var mongoose = require("mongoose")
var Schema = mongoose.Schema

var bookingRequestSchema = new Schema({
user_id : {type: String},
dentist_id : {type: Schema.Types.ObjectId, ref: 'Dentist'},
issuance : {type: String, unique: true},
date : {type: Date, default: Date.now()}
});

bookingRequestSchema.virtual("user").get(function() {
    return this.user_id;
});

bookingRequestSchema.virtual("issuance").get(function() {
    return this.issuance;
});

bookingRequestSchema.virtual("date").get(function() {
    return this.date;
});

module.exports = mongoose.model('BookingRequests', bookingRequestSchema)