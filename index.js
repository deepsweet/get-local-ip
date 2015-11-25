'use strict';

var rangeCheck = require('range_check');
var os = require('os');

module.exports = function(network) {
    if (!network) {
        throw new Error('You must provide a network range string, for example "192.168.0.0/24"');
    }

    var ifaces = os.networkInterfaces();

    for (var name in ifaces) {
        var iface = ifaces[name];

        for (var i = 0; i < iface.length; i++) {
            var details = iface[i];

            if (details.family === 'IPv4' && details.internal === false) {
                if (rangeCheck.inRange(details.address, network)) {
                    return details.address;
                }
            }
        }
    }
};
