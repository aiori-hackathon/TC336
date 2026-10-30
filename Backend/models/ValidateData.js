var mongoose = require('mongoose');

const validateDataSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    latency: {
        type: Number,
        required: true
    },
    cpuUsed: {
        type: Number,
        required: true
    },
    memoryUsed: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model("ValidateDataModel", validateDataSchema);