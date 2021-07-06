const program = require('commander');
const { webpack4 } = require('./webpack4-command');
const { vue2 } = require('./vue2-command');
const { createProjectAction } = require('./actions');

const createCommands = () => {
    //创建项目指令
    program
        .command('create <opject> [other...]')
        .description('clone reppsiory into a folder 例如：yqc create project vue2')
        .action(createProjectAction);

    webpack4();
    vue2();
}

module.exports = createCommands;