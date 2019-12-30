<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div :style="{fontSize:currSize+'px'}">
      <Test1230BiaoDan :article="testProp1" @enlarge-size="enLargeSize" >
      
      这是从父组件插入的内容，，，
      </Test1230BiaoDan>


    </div> -->
    <component :is="componentName"></component>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Test1230 from '../components/Test1230'
import Test1230BiaoDan from '../components/Test1230BiaoDan'

export default {
  name: 'home',
  components: {
    Test1230,
    Test1230BiaoDan
  },
  data() {
    return {
      testProp1: {
        author: 'someone',
        title: 'this is a test title',
        content:
          'this is a test content,this is a test content,this is a test content,this is a test content'
      },
      currSize: 12,
      componentName:'Test1230BiaoDan'
    }
  },
  methods: {
    enLargeSize() {
      this.currSize += 1
    }
  }
}
</script>
