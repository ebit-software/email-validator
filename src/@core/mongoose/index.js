const _default = function () {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test');
};

export { _default as default };