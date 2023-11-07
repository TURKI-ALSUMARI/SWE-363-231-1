const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
 //BE ,VJGAFVKAHWSVKUVAKDJFVB
const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
 

 
const sDir = process.argv[2];
const tDir = process.argv[3];
 
async function copyFile(sDir, tDir, extensions) {
  try {
    const files = await readdir(sDir);
 
    for (const file of files) {
      const fileExtension = path.extname(file).toLowerCase();
 
      if (extensions.includes(fileExtension)) {
        const sourceFilePath = path.join(sDir, file);
        const targetFilePath = path.join(tDir, file);
 
        await copyFile(sourceFilePath, targetFilePath);
        
      }
    }
  } catch (err) {
    console.error('Error!!', err);
  }
}
 
const ex = ['.txt', '.jpg'];
 
copyFile(sDir, tDir, ex);