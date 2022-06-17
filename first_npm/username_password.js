var { Command } = require('commander');
var program = new Command();

program.version('0.0.1')
  program.argument("<username>","user login details")
        .argument("[password]","password for user if needed","default")
        .action(function(username,password){
            console.log("username",username);
            console.log("password",password);
        })


program.parse(process.argv);