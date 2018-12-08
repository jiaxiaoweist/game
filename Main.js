//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";

export class Main {
    constructor(){
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        const loader = ResourceLoader.creat();
        loader.onLoaded(map => this.onResourceFirstLoader(map));
    }
    onResourceFirstLoader(map){
        let background = new BackGround(this.ctx,map.get('background'));
        background.draw()
    }
}