const path = require('path');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const gitUrl = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile, createDirSync } = require('../utils/utils')

//callback -> promisify -> promise -> async await
const createProjectAction = async (project,othres) => {
    console.log('正在帮助你创建项目，请等待~')

    try {
        // 1.colone 项目
        await download(gitUrl[othres[0]], project, { clone: true });
        // 2.执行npm install
        const command = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
        await commandSpawn(command, ['install'], { cwd: `./${project}` });
        // 3.运行npm run serve
        // commandSpawn(command, ['dev'], { cwd: `./${project}` });
        // open("http://localhost:8080/")
        // 4.打开浏览器
    } catch (e) {
        console.log(e)
    }
}

const addComponentAction = async (name, dest) => {
    console.log('正在帮助你创建组件，请等待~')

    try {
        //1.编译ejs模板 result
        const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() });
        //2. 写入文件的操作
        const targetPath = path.resolve(dest, `${name}.vue`);
        writeToFile(targetPath, result);

    } catch (e) {
        console.log(e)
    }
}

//添加组件和路由
const addPageAndRoute = async (name, dest) => {
    console.log('正在帮助你创建路由页面，请等待~')

    try {
        // 1.编译ejs模板
        const data = { name, lowerName: name.toLowerCase() };
        const pageResult = await compile('vue-component.ejs', data);
        const routeResult = await compile('vue-router.ejs', data);
        //2.引入文件 
        const targetDest = path.resolve(dest, name.toLowerCase());
        if (createDirSync(targetDest)) {
            const targetPagePath = path.resolve(targetDest, `${name}.vue`);
            const targetRoutePath = path.resolve(targetDest, 'router.js');
            writeToFile(targetPagePath, pageResult);
            writeToFile(targetRoutePath, routeResult);
        }

    } catch (e) {
        console.log(e)
    }
}

// 添加store和配置
const addStoreAction = async (name, dest)=>{
    console.log('正在帮助你创建vuex页面配置，请等待~')

    try{
        //1.编译ejs模板
        const storeResult = await compile('vue-store.ejs', {});
        const typesResult = await compile('vue-types.ejs', {});

        //2.引入文件 
        const targetDest = path.resolve(dest, name.toLowerCase());
        if(createDirSync(targetDest)){
            const targetStorePath = path.resolve(targetDest, `${name}.js`);
            const targetTypesPath = path.resolve(targetDest, `types.js`);
            writeToFile(targetStorePath, storeResult);
            writeToFile(targetTypesPath, typesResult);
        }
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    createProjectAction,
    addComponentAction,
    addPageAndRoute,
    addStoreAction
}