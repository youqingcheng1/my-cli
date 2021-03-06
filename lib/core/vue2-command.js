const program = require('commander');
const { addComponentAction, addPageAndRoute, addStoreAction } = require('./actions');
const vue2 = () => {
    program
        .command('addcpn <name> [othre...]')
        .description('add vue2 component, 例如：yqc addcpn HelloWorld [-d src/components] vue2')
        .action((name, othre) => { addComponentAction(name, program.opts().dest || 'src/components', othre) });

    program
        .command('addpage <page> [othre...]')
        .description('add vue2 page and router config, 例如：yqc addpage Home [-d src/pages] vue2')
        .action((page, othre) => {
            addPageAndRoute(page, program.opts().dest || 'src/pages', othre);
        })

    program
        .command('addstore <name> [othre...]')
        .description('add vue2 page and store config, 例如：yqc addstoree Test [-d src/store] vue2')
        .action((store, othre) => {
            addStoreAction(store, program.opts().dest || 'src/store', othre)
        })
}

module.exports = {
    vue2
}