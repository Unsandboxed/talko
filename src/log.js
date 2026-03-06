const nanolog = require('@turbowarp/nanolog');
nanolog.enable();

module.exports = nanolog('talko');
module.exports.nanolog = nanolog;
