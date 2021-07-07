const program = require('commander');
const { addVue3ComponentAction } = require('./actions');
const vue3 = () => {
    program
        .command('addVue3 <name> [othre...]')
        .description('add vue component, yqc vue3Cpm HelloWorld [-d src/components]')
        .action((name, othre) => { addVue3ComponentAction(name, program.opts().dest || 'src/components', othre) });
}

module.exports = {
    vue3
}