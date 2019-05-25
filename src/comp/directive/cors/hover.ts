/**
 * @description 全局hover指令
 * @author jinzz
 * created by 2019/05/05
 * 使用方法：
 *     import hover from "directive/hover"
 *     Vue.directive("hover",hover);
 * 默认功能：
 *     支持为节点增加移入移除修改其innerText
 * 修饰符：
 *      debug : 开启debug功能，可以在指令 bind,inserted,update,componentUpdated,unbind时候输出debug信息
 *      custom: 开启自定义功能，可以在移入移出时候执行自定义函数
 * 支持指令参数：
 *      debug : 同修饰符的debug功能，可以和指令同时存在，但是debug信息只会输出一次
 * 
 */
interface binding  {
    def:object,
    expression:string,
    modifiers:{
        debug:boolean,
        custom:boolean,
    },
    name:string,
    rawName:string,
    value:any,
    arg:string
}

export default {
    install : function(Vue:any){
        Vue.directive("hover",{
            bind:function(el:any,binding:any){
                if(binding.modifiers.debug || binding.arg == "debug"){
                    console.log("%cdebugger:%chover-bind","background:#66cc00;padding:5px 10px;color:#fff;margin-right:3px","color:#999");                    
                }
            },
            inserted: function (el:any,binding:binding) {
                if(binding.modifiers.debug || binding.arg == "debug"){
                    console.log("%cdebugger:%chover-inserted","background:#66cc00;padding:5px 10px;color:#fff;margin-right:3px","color:#999");                    
                }
                
                let value = el.innerText;
                el.addEventListener("mouseover",function(){
                    if(binding.modifiers.custom){
                        binding.value(el);
                        return false;
                    }
                    el.innerText = binding.value;
                },true)
                el.addEventListener("mouseout",function(){
                    if(binding.modifiers.custom){
                        return false;
                    }
                    el.innerText = value;
                },true)
            },
            update: function (el:any,binding:any) {
                if(binding.modifiers.debug || binding.arg == "debug"){
                    console.log("%cdebugger:%chover-update","background:#66cc00;padding:5px 10px;color:#fff;margin-right:3px","color:#999");
                    
                }
            },
            componentUpdated: function (el:any,binding:any) {
                if(binding.modifiers.debug || binding.arg == "debug"){
                    console.log("%cdebugger:%chover-componentUpdated","background:#66cc00;padding:5px 10px;color:#fff;margin-right:3px","color:#999");
                }
            },
            unbind: function (el : any,binding:any) {
                if(binding.modifiers.debug || binding.arg == "debug"){
                    console.log("%cdebugger:%chover-unbind","background:#66cc00;color:#fff;padding:5px 10px;margin-right:3px","color:#999");
                }
                if(binding.modifiers.custom){
                    return false;
                }
                el.removeEventListener("mouseover",function(){},true);
                el.removeEventListener("mouseout",function(){},true);
            }
        })
    }
}