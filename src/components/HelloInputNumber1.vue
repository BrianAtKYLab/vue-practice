<template>
  <div class='hello'>
    <h1>Hello Input Number</h1>
    <el-input-number v-model="objs.num1"></el-input-number>
     <button @click="addObjProp">ADD WATCHER</button>
  </div>
</template>

<script>
export default {
  name: "HelloInputNumber",
  data() {
    return {
      objs: {}
    };
  },
  methods: {
    addObjProp: function() {
      this.$watch("objs.num1", function(newVal, oldVal) {
        this.objs.num1 = Math.ceil(newVal);
      });
    }
  }
};
</script>

<style scoped>

</style>
