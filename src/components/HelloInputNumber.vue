<template>
  <div class='hello'>
    <h1>Hello Tree</h1>
    <el-input-number v-model="obj.num1">

    </el-input-number>
  </div>
</template>

<script>
export default {
  name: "HelloInputNumber",
  data() {
    return {
      obj:{
        num1:1,
        num2:2
      }
    };
  },
  methods: {

  },
  watch: {
    'obj.num1': {
      immediate:true,
      handler(value){
        console.log(value);
        this.obj.num1 = Math.round(value,0);     
      }      
    }
  }
};
</script>

<style scoped>

</style>
