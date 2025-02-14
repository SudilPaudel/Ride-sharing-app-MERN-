const mongoose = require("mongoose")
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});
const blacklistTokenModel = mongoose.model("blacklist-token", blacklistTokenSchema);
module.exports = blacklistTokenModel