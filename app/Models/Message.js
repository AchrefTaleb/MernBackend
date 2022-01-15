const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        content: {
            type: Object,
            required: true,
        },
        page: { type: mongoose.Schema.Types.ObjectId, ref: "Page" },
        form: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
    }
)

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;