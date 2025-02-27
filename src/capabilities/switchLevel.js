const { inherits } = require('util');
const Capability = require('./capability');

function SwitchLevel() {
    Capability.apply(this, arguments);
}
inherits(SwitchLevel, Capability);

SwitchLevel.prototype.setLevel = function(level) {
    return this.command(SwitchLevel, 'setLevel', [
        level,
    ]);
}

SwitchLevel.prototype.getLevel = function() {
    return this.getAttribute(SwitchLevel, 'level');
}

SwitchLevel.SmartThingsCapability = 'switchLevel';
SwitchLevel.ScryptedInterface = 'Brightness';
SwitchLevel.Attributes = {
    level: function(value) {
        // everything is a string, parse it.
        try {
            return !value ? 0 : parseInt(value);
        }
        catch (e) {
            return 0;
        }
    }
}
module.exports = SwitchLevel;
