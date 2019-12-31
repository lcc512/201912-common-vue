<template>
  <div>
    <h2>Test1230Pm</h2>
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <input type="text" v-focus />
    <br>
    <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
       value1: true,
        value2: true
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        console.log(el)

        el.focus()
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>