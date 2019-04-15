var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
var chatSchema = new mongoSchema({
    senderUserId: {
        type: String

    },
    senderName: {
        type: String

    },
    reciverName: {
        type: String

    },
    message: {

        type: String

    }

}, {
        timestamps: true
    });

function chatModel() {

}
var chat = mongoose.model('chatInfo', chatSchema);
module.exports = new chatModel();