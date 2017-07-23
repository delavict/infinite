'use strict';
import * as fs from 'fs';

export function getFiles(dir,format,coreName,n){
    var fileList = [];
    for(var i = 0;i<n;i++){
        var fileUrl = dir+coreName+(i+1)+'.'+format;
        var fileItem = {
            fileUrl:fileUrl,
            fileNumber:i+1
        }
        fileList.push(fileItem);
    }
    return fileList;
}

export function checkFormat(filename,extension){
    var ext = getExtension(filename);
    if (ext == extension) return true;
    return false;
}

export function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
