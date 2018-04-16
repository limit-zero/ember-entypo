var sass = require('node-sass'); // eslint-disable-line
var fs = require('fs');
var path = require('path');

var inputFile = path.join(__dirname, 'vendor', 'entypo.scss');
var outputFile = path.join(__dirname, 'vendor', 'entypo.css');
var buf = fs.readFileSync(inputFile, "utf8");

// Compile main file
var result = sass.renderSync({
  data: buf,
  includePaths: ['vendor']
});

fs.writeFileSync(outputFile, result.css);
