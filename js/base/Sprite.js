//精灵的基类，负责初始化精灵加载的资源和大小以及位置
import {DataStore} from "./DataStore.js";

export class Sprite {
    constructor(img = null,//img 传入Image对象
                srcX = 0,//起始剪裁位置X坐标
                srcY = 0,//起始剪裁位置Y坐标
                srcW = 0,//剪裁的宽度
                srcH = 0,//剪裁的高度
                x = 0,//放置的x坐标
                y= 0,//放置的y坐标
                width = 0,//使用图片的宽度
                height = 0//使用图片的宽度
    ){
        //附到类的原型链上，让这个类有这些类变量
        this.dataSore = DataStore.getInstance();
        this.ctx = this.dataSore.ctx;
        this.img = img;
        this.srcX= srcX;
        this.srcY = srcY;
        this. srcW =  srcW;
        this.srcH = srcH;
        this.x= x;
        this.y = y;
        this.width = width;
        this.height = height
    };
    static getImage(key){
        return DataStore.getInstance().res.get(key)
    }

    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height
         ){
        this.ctx.drawImage(
        img,
        srcX,
        srcY ,
        srcW,
        srcH ,
        x,
        y,
        width,
        height
        );
    }
}