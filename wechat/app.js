'use strict'

var Koa = require('koa');
const convert = require('koa-convert');
var path = require('path');
var wechat = require('./wechat/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');

var config = {
    wechat: {
        appID: 'wx7a6481919f0be4ce',
        appSecret: '458e5de50d5bd64fc1c3d2fc325e8e44',
        token: 'wangyingiscute',
        getAccessToken: function () {
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function (data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file,data);
        }
    }
};

var app = new Koa;

app.use(convert(wechat(config.wechat)));

 //app.listen(1234);
 //console.log('listening:1234')