// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var Hook = require("Hook");

cc.Class({
    extends: cc.Component,

    properties: {
        mHook : cc.Node,
    },

    start () {

    },

    startAnim () {
        var anim = this.getComponent(cc.Animation);
        anim.play('CatAnim');//播放指定动画
    },

    OnAnimEnd () {
        var pHook = this.mHook.getComponent("Hook");
        pHook.StartLine();
    },
});
