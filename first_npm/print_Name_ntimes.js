var { Command } = require('commander');
var program = new Command();

program.version('0.0.1')
  program.argument("<name>","name to print")
          .argument("[number]","number of time to print")
          .action(function(name,number){
            number=Number(number);
            for(let i=0;i<number;i++){
                console.log(name);
            }
          })


program.parse(process.argv);