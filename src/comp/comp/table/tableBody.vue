<template>
     <tbody class = "j-table-body">
                <tr v-for = "(row,rowKey) in data" :key = "rowKey">
                    <td v-for = "(title,titleKey) in titleMap" :key = "titleKey">
                        {{ row[title.key] }}
                    </td>
                </tr>
                
    </tbody>
</template>

<script lang = "ts">
import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
@Component({

})
export default class jTableBody extends Vue{
    @Prop({default:[]}) data!:number[];
    @Prop({default:[]}) titleMap!:number[];
}
</script>
<style scoped>
    .j-table-body tr td {
        border:1px solid #aeaeae;
        text-align: center;
    }
</style>
