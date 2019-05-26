<template>
     <tbody class = "j-table-body">
                <tr v-for = "(row,rowKey) in data" :key = "rowKey">
                    <td v-if = "actions.length > 0">
                        <j-button v-for = "(config,index) in actions" 
                                 :key = "index"
                                 inline
                                 :type = "config.type?config.type:'default'"
                                 :threed = "config.threed ? config.threed:false"
                                 :text = "config.text ? config.text:false"
                                 @click = "config.callback ? config.callback(row) : ''">
                            {{config.val ? config.val : '操作'}}      
                               
                        </j-Button>
                    </td>
                    <td v-for = "(title,titleKey) in titleMap" :key = "titleKey">
                        {{ row[title.key] }}
                    </td>
                </tr>
                
    </tbody>
</template>

<script lang = "ts">
import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
import jButton from "../button/button.vue";
@Component({
    components:{
        jButton
    }
})
export default class jTableBody extends Vue{
    @Prop({default:[]}) data ?:number[];
    @Prop({default:[]}) titleMap ?:number[];
    @Prop({default:[]}) actions ?:number[];
}
</script>
<style scoped>
    .j-table-body tr td {
        border:1px solid #aeaeae;
        text-align: center;
    }
</style>
