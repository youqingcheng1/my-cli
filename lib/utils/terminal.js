// 执行终端命令相关
const { spawn } = require('child_process');  //子进程
/**
 * spawn()
 * @param command 要运行的命令 (string)
 * @param args 字符串参数列表 (string[])
 * @param options 配置 (object)
 * @returns 
 */
const commandSpawn = (...args)=>{
    return new Promise((resolve)=>{
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on("close",()=>{
            resolve()
        })
    })
}

module.exports = {
    commandSpawn
}