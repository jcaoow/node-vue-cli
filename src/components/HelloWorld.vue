<template>
  <div class="hello">
    
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState, mapActions } from 'vuex';
import { api1 } from '@/services/index';
export default {
  name: 'HelloWorld',
  mounted () {
    api1({key1: '123'}).then(res => {
      // deal res
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.changeText()
  },
  computed: {
    ...mapState({
      text: state => state.moduleA.text
    })
  },
  methods: {
    ...mapActions('moduleA', [
      'changeText'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
