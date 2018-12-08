//资源文件加载器，确保canvas在图片加载完成后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader {
    constructor(){
        //创建一个map放到类变量里
        this.map = new Map(Resources);
        //遍历
        for (let [key,value] of this.map) {
            //创建img对象，更改map的value
            const image = new Image();
            image.src = value;
            //set到数组里
            this.map.set(key,image);
        }
    }
    //回调
    onLoaded(callback){
        let loadedCount = 0;
        for (let value of this.map.values()){
            value.onload = () => {
                loadedCount++;
                if(loadedCount >= this.map.size){
                    callback(this.map)
                }
            }
        }
    }
    static creat(){
        return new ResourceLoader()
    }
}