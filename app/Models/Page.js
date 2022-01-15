const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,            
            lowercase: true,
        },
        form: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
    }
)

const Page = mongoose.model('Page', PageSchema);

module.exports = Page;