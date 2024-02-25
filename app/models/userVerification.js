const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userVerificationSchema = new Schema({
    userId: { type: String},
    uniqueString: { type: String },
    createdAt:{Date},
    expiryAt:{Date}
}, { timestamps: true })

module.exports = mongoose.model('UserVerification', userVerificationSchema)