var { Command } = require('commander');
var program = new Command();

program.version('0.0.1')

var QRCode = require("qrcode");

program.argument("<text>","text for qrcode")
 .action(QRCode.toString('text',{type:'terminal'}, function (err ,url) {
        console.log(url)
       }))

// QRCode.toString('I am Mohit Birla!',{type:'terminal'}, function (err, url) {
//     console.log(url)
//   })

program.parse(process.argv);