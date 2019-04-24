const csv = require('fast-csv');
const fs = require('fs');

///////////////////////////////////////////////
//  REFLECTION
///////////////////////////////////////////////

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.pushBefore = function (item) {
    this.splice(this.length - 1, 0, item);
};

///////////////////////////////////////////////
//  GLOBAL
///////////////////////////////////////////////

var convs = {};

///////////////////////////////////////////////
//  CODE
///////////////////////////////////////////////

csv.fromPath('data.csv', {
    headers: true,
    discardUnmappedColumns: true,

}).on('data', function (data) {
    // Check if the address isn't empty.
    if (data.address) {
        
        // Check if the conversation exist.
        if (!convs[data.address]) {
            convs[data.address] = [];
        }

        // Get the conversation and format the message.
        var conv = convs[data.address];
        var message = { type: data.type, body: data.body, timestamp: data.date }

        // Push the message before the last if older.
        if (conv.last() && data.date < conv.last().date)
            conv.pushBefore(message);
        else conv.push(message);
    }

}).on('end', function () {
    // Convert to JSON.
    var json = JSON.stringify(convs, null, 2);

    console.log(convs);

    // Save to file.
    fs.writeFileSync('final.json', json);

    // Exit.
    console.log('Done.');
});