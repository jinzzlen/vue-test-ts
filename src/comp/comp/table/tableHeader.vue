<template>
        <thead class = "j-table-header">
            <tr>
                <th v-if = "actions.length > 0">操作</th>
                <th v-for = "(title,titleKey) in titleMap" :key = "titleKey">
                        {{ title.name }}
                </th>
                
            </tr>
        </thead>
</template>


<script lang = "ts">
import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
@Component({

})
export default class jTableHeader extends Vue{
    @Prop({default:[]}) titleMap ?: number[];
    @Prop({default:[],type:Array}) actions ?:number[];
}
</script>

<style scoped>
   
    .j-table-header tr th {
        border:1px solid #aeaeae;
        text-align: center;
    }
</style>
