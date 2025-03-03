// ==UserScript==
// @name         AmapLoginAssist - 高德地图Web网页版支持密码登录、三方登录
// @namespace    https://github.com/chaofunchengfeng/AmapLoginAssist
// @homepage     https://github.com/chaofunchengfeng/AmapLoginAssist
// @homepageURL  https://github.com/chaofunchengfeng/AmapLoginAssist
// @website      https://github.com/chaofunchengfeng/AmapLoginAssist
// @source       https://github.com/chaofunchengfeng/AmapLoginAssist
// @version      0.5
// @description  高德地图Web网页版支持密码登录、三方登录
// @author       chaofunchengfeng
// @match        https://*.amap.com/*
// @icon         https://www.amap.com/favicon.ico
// @run-at       document-idle
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    let pollCount = 0;
    let intervalID = setInterval(() => {
        try {
            pollCount++;
            if (pollCount > 50) {
                clearInterval(intervalID);
                return;
            }

            //
            if (window.passport && window.passport.config) {
                clearInterval(intervalID);
                window.passport.config({
                    loginMode: ["password", "message", "qq", "sina", "taobao", "alipay", "subAccount", "qrcode"],
                    loginParams: {
                        dip: 20303
                    }
                });
                window.passport.config = () => { };
            }

        } catch (e) {
            console.error(e)
            clearInterval(intervalID);
        }
    }, 100);
})();