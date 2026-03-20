// ==UserScript==
// @name         AmapLoginAssist - 高德地图Web网页版支持密码登录、三方登录
// @namespace    https://github.com/chaofunchengfeng/AmapLoginAssist
// @homepage     https://github.com/chaofunchengfeng/AmapLoginAssist
// @homepageURL  https://github.com/chaofunchengfeng/AmapLoginAssist
// @website      https://github.com/chaofunchengfeng/AmapLoginAssist
// @source       https://github.com/chaofunchengfeng/AmapLoginAssist
// @version      0.7
// @description  高德地图Web网页版支持密码登录、三方登录
// @author       chaofunchengfeng
// @match        https://*.amap.com/*
// @match        https://*.gaode.com/*
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
            if (window.passport && window.passport.show) {
                clearInterval(intervalID);

                window.passport.showBak = window.passport.show;
                window.passport.show = (...args) => {
                    args[0] = {
                        zIndex: 1e4,
                        showMask: !0,
                        idDomain: "https://id.amap.com",
                        hideClose: !1,
                        loginMode: ["password", "message", "qq", "sina", "taobao", "alipay", "subAccount", "qrcode"],
                        loginParams: {
                            dip: 20303
                        }
                    };
                    window.passport.showBak.apply(this, args);
                };
            }

        } catch (e) {
            console.error(e);
            clearInterval(intervalID);
        }
    }, 100);
})();
