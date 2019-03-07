//不断移动的陆地
import {Sprite} from "../base/Sprite.js";

export class Land extends Sprite{
    constructor(){
        const image =Sprite.getImage('land');
        super(image,//传入Image对象
            0,//起始剪裁位置X坐标
            0,//起始剪裁位置Y坐标
            image.width,//剪裁的宽度
            image.height,//剪裁的高度
            0,//放置的x坐标
            window.innerHeight-image.height,//放置的y坐标
            image.width,//使用图片的宽度
            image.height,//使用图片的宽度
            );
            this.landX = 0;//地板的水平变化坐标
            this.landSpeed = 2;//地板的移动速度
    }

    draw(){
        this.landX = this.landX + this.landSpeed;
        if (this.landX > (this.img.width-window.innerWidth)) {
            this.landX = 0
        }
        super.draw(this.img,//img 传入Image对象
                this.srcX,//起始剪裁位置X坐标
                this.srcY,//起始剪裁位置Y坐标
                this.srcW,//剪裁的宽度
                this.srcH,//剪裁的高度
                -this.landX,//放置的x坐标
                this.y,//放置的y坐标
                this.width,//使用图片的宽度
                this.height)//使用图片的宽度
    }
}