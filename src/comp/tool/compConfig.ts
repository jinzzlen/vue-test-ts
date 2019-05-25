let __key:number = -1;

export default {
    getKey(){
        __key++;
        return __key;
    }
}