<template>
  <div class='hello'>
    <h1>Hello Tree</h1>
    <el-input-number v-model="num1">

    </el-input-number>
  </div>
</template>

<script>
export default {
  name: "HelloInputNumber",
  data() {
    return {
      num1:1
    };
  },
  methods: {

  },
  watch: {
    num1:{
      immediate:true,
      handler(value){
        console.log(value);
        this.num1 = Math.round(value,0);
      }      
    }
  }
};
</script>

<style scoped>

</style>
