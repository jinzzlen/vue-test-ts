    /**
     * @description eventbus事件 
     * @author jinzz
     * created by 2018/05/25
     * ！！！取消事件订阅必须跟事件订阅成对出现，否则会重复订阅，对javascript性能造成不必要的浪费。因此B组件销毁前需取消当前事件订阅。 
     * @param {any} event 第一个参数是事件对象，第二个参数是接收到消息信息，可以是任意类型，更多参数也可以留作扩展，使用...运算符方便更多操作
     * @method $on 事件订阅, 监听当前实例上的自定义事件。https://cn.vuejs.org/v2/api/#vm-on
     * @method $off 取消事件订阅，移除自定义事件监听器。 https://cn.vuejs.org/v2/api/#vm-off https://github.com/vuejs/vue/issues/3399
     * @method $emit 事件广播, 触发当前实例上的事件。 https://cn.vuejs.org/v2/api/#vm-emit
     * @method $once 事件订阅, 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。 https://cn.vuejs.org/v2/api/#vm-once
     */
    export default {
        install:function(Vue:any){
            const eventHub = new Vue()
            Vue.prototype.$_event = {
    
                $on (...event:any[]) {
                eventHub.$on(...event)
                },
                $off (...event:any[]) {
                eventHub.$off(...event)   
                },
                $once (...event:any[]) {
                eventHub.$emit(...event)
                },
                $emit (...event:any[]) {
                eventHub.$emit(...event)
                }
            }
        }
    }