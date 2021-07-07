const program = require('commander');
const { webpackPageAction } = require('./actions');

const webpack4 = () => {
    program
        .command('add <name> [othre...]')
        .description('add webpack4 page, 例如：yqc addpage Test webpack4')
        .action((name, othre) => { webpackPageAction(name, program.opts().dest || 'src',othre) });
}

module.exports = {
    webpack4
}