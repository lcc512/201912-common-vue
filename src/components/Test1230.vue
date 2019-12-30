<template>
  <div>
      <h2>test1230</h2>
      <ul>
          <li v-for="(item,index) in listData" :key="index">
              {{item}}
          </li>
      </ul>
      <div>{{testObj}}</div>
      <button data-id="hahaha" @click="onClickFun($event)">按钮1</button>
  </div>
</template>

<script>
export default {

    data(){
        return {
         listData:[1,2,3,4,5],
         testObj:{
             id:1,
             name:'123'
         }
        }
    },
    methods:{
        onClickFun(e){
            console.log(12323);
            this.listData.reverse()

            // 给对象动态添加属性
            // this.$set(this.testObj,'like','girl')

            console.log(e);
            

            
            
        }
    }

}
</script>

<style>

</style>