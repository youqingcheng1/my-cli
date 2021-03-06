const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const compile = (templateName, data) => {
    const templatePosition = `../templates/${templateName}`;
    const templatePath = path.resolve(__dirname, templatePosition);
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, {}, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
                return
            }

            resolve(result);
        })
    })
}

//创建目录 判断path 是否存在，如果不存在，创建对应的文件夹
const createDirSync = (pathName)=>{
    if(fs.existsSync(pathName)){
        return true
    } else {
        if(createDirSync(path.dirname(pathName))){
            fs.mkdirSync(pathName);
            return true;
        }
    }
}

const writeToFile = (path, content) => {
    return fs.promises.writeFile(path, content)
}

module.exports = {
    compile,
    writeToFile,
    createDirSync
}