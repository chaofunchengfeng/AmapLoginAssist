// ==UserScript==
// @name         AmapLoginAssist - 高德地图支持密码登录、三方登录
// @namespace    https://choa.fun/p/1282414
// @homepage     https://choa.fun/p/1282414
// @homepageURL  https://choa.fun/p/1282414
// @website      https://choa.fun/p/1282414
// @source       https://choa.fun/p/1282414
// @version      0.4
// @description  高德地图支持密码登录、三方登录
// @author       cf
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