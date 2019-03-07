//积分器类
import {DataStore} from "../js/base/DataStore.js";

export class Score {
    constructor(){
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //因为canvas刷新很快，所以需要一个变量控制加分，只加一次
        this.isSore = true
    }

    draw(){
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth / 2,
            window.innerHeight / 18,
            1000
        )

    }
}