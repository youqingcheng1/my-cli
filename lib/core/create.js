const program = require('commander');
const { createProjectAction, addComponentAction, addPageAndRoute, addStoreAction } = require('./actions');

const createCommands = () => {
    //创建项目指令
    program
        .command('create <opject> [others...]')
        .description('clone reppsiory into a folder 例如：why create project')
        .action(createProjectAction);

    program
        .command('addcpn <name>')
        .description('add vue component, 例如：why addcpn HelloWorld [-d src/components]')
        .action((name) => { addComponentAction(name, program.opts().dest || 'src/components') });
    
    program
        .command('addpage <page>')
        .description('add vue page and router config, 例如：why addpage Home [-d src/pages]')
        .action((page)=>{
            addPageAndRoute(page,program.opts().dest || 'src/pages');
        })
    
    program
        .command('addstore <name>')
        .description('add vue page and store config, 例如：why addstoree')
        .action((store)=>{
            addStoreAction(store,program.opts().dest || 'src/store/modules')
        })
}

module.exports = createCommands;