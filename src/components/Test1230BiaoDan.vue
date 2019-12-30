<template>
  <div>
    <div>父组件带来的数据</div>
    <hr />
    <div>
      <div>{{article.title}}</div>
      <div>{{article.author}}</div>
      <div>{{article.content}}</div>
    </div>
    <button @click="chufashijian">触发enlarge事件</button>
    <div>---插槽显示位置---</div>
    <slot></slot>
    <div>---插槽显示位置---</div>

    <h2>测试表单</h2>
    <hr />
    <form action>
      <input v-model.lazy="username" name="username" type="text" placeholder="输入名字" />
      <input v-model="password" name="password" type="password" placeholder="输入密码" />
      <input v-model.number="testNumber" type="text" placeholder="输入数字" />

      <select name id v-model="testValue">
        <option value disabled>请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    </form>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data() {
    return {
      username: '',
      password: '',
      content: '',
      testValue: '',
      toggle: '',
      testNumber: 0
    }
  },
  methods: {
    chufashijian() {
        this.$emit('enlarge-size')
    }
  }
}
</script>

<style>
</style>