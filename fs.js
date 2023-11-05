const fs = require('fs');
const path = require('path');



function scanFilesByFolder(dir, cb) {
    let _folder = path.resolve(__dirname, dir);
    if (!getFileStat(_folder)) {
        return;
    }

    try {
        const files = fs.readdirSync(_folder);
        files.forEach(file => {
            let filename = file.replace('.js', '');
            let oFileCnt = require(_folder + '/' + filename);
            cb && cb(filename, oFileCnt);
        })
    } catch (err) {
        console.log('文件加载失败....', err);
    }
}


//检测文件夹是否存在
/**
 * @param {string} path 路径
 */
function getFileStat(path) {
    try {
        fs.statSync(path);
        return true;
    } catch (err) {
        return false;
    }
}

const initConfig = function () {
    let config = {};
    scanFilesByFolder('./ACM', (filename, content) => {
        config = { ...config, ...content };
    })
    return config;
}

console.log(initConfig());