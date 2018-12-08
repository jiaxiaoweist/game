//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main {
    constructor(){
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        // const loader = ResourceLoader.creat();
        // loader.onLoaded(map => this.onResourceFirstLoader(map));

        let image = new Image();
        image.src = '../res/background.png';

        image.onload = () =>{
            this.ctx.drawImage(
                image,//img 传入Image对象
                0,//要剪裁的起始X坐标
                0,//要剪裁的起始Y坐标
                image.width,//剪裁的宽度
                image.height,//剪裁的高度
                0,//放置的x坐标
                0,//放置的y坐标
                image.width,//要使用的宽度
                image.height//要使用的宽度
            );
        };
    }
    // onResourceFirstLoader(map){
    //     console.log(map)
    // }
}