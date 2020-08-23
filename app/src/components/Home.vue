<template>
  <div class="hello">
    <input v-model="username" type="string" placeholder="Enter your lichess username">
    <button @click="test">Enter!</button>
  </div>
</template>

<script>
import axios from 'axios'
import {SERVER_ADDRESS} from '../assets/constants'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function () {
    return {username: ""};
  },
  methods: {
    test: function () {
      const username = this.username
      axios({
        method: 'post',
        url: `${SERVER_ADDRESS}/test`,
        data: {username}
      }).then(response => {
        if (response.status === 200) {
          this.$router.push({path: '/main'})
        } else {
          alert(response.data.username)
        }
      })
    }
  }
}
</script>

