 <template>
     <table>
       <tr v-for="n in 10" @click="onClickAction">
         <td>
           <span>aaa</span>           
         </td>
         <td><span>bbb</span></td>
         <td><i class="el-icon-delete" @click.stop="iconClickAction"></i></td>
       </tr>
     </table>
  </template>

  <script>
    export default {
      data() {
        return {       
        }
      },
      methods:{
        onClickAction(){
          alert('click')
        },
        iconClickAction(){
          alert('deleted')
        }
      }
    }
  </script>

  <style scoped>
  table{
    width:100%;
    border:1px solid black;
  }
  td{
      border:1px solid black;
  }
  </style>
