const fs = require('fs');
const path = require('path');
const Client = require('ftp');
function WebpackFTP(options) {

  this.config = options;
  //this.config.debug = console.log;

}
WebpackFTP.prototype.apply = function(compiler) {

  compiler.plugin('done', () => {
    const client = new Client();
    const cfg = this.config;
    let dirName = `${cfg.remoteRoot}`;
    let buildPath = cfg.buildPath;
    fs.readdir(buildPath, (err, files) => {
      if (err) {
        console.log('read directory got wrong \n');
        throw err;
      }

      client.on('ready', () => {
        client.cwd(cfg.remoteRoot, () => {
          client.mkdir(dirName, true, (err) => {
            if (err) {
              console.log('failed to create directory, check the function of client.mkdir\n');
              console.log(err);
            }
            files.forEach((file, index) => {
              if (this.config.fileType.test(file)) {
                const filePath = `${buildPath}/${file}`;
                client.put(
                  filePath,
                  `${dirName}/${file}`,
                  (err) => {
                    if (err) {
                      console.log('upload failed！\n');
                      console.log(err);
                    }
                    console.log(`${file} uploaded..`);
                    client.end();
                    /*if (index === files.length - 1) {
                     client.end();
                     }*/
                  }
                );
              }
            });
          });
        });
      });
      //console.log(this.config);
      client.on('error', (err) => {
        console.log('连接客户端出错：\n');
        console.log(err);
      });
      client.connect(this.config);
    });

  });
};
module.exports = WebpackFTP;
