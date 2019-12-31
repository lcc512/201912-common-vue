<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div :style="{fontSize:currSize+'px'}">
      <Test1230Biaodan :article="testProp1" @enlarge-size="enLargeSize" >
      
      这是从父组件插入的内容，，，
      </Test1230Biaodan>


    </div> -->
    <Test1230Pm></Test1230Pm>
    <Test1231Echarts></Test1231Echarts>
    <!-- <component :is="componentName"></component> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Test1230 from '../components/Test1230'
import Test1230Biaodan from '../components/Test1230Biaodan'
import Test1230Pm from '../components/Test1230Pm'
import Test1231Echarts from '../components/Test1231Echarts'

export default {
  name: 'home',
  components: {
    Test1230,
    Test1230Biaodan,
    Test1230Pm,
    Test1231Echarts
  },
  data() {
    return {
      testProp2:'123',
      testProp1: {
        author: 'someone',
        title: 'this is a test title',
        content:
          'this is a test content,this is a test content,this is a test content,this is a test content'
      },
      currSize: 12,
      componentName:'Test1230Biaodan'
    }
  },
  methods: {
    enLargeSize() {
      this.currSize += 1
    }
  }
}
</script>
