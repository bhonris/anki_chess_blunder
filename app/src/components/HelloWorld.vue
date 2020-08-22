<template>
  <div class="hello">
    <button @click="test">Click me</button>
  </div>
</template>

<script>
import axios from 'axios'
import { SERVER_ADDRESS } from '../assets/constants'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    test: function(){
      axios({
        method: 'get',
        url: `${SERVER_ADDRESS}/test`
      }).then(response => {
        if (response.status === 200) {
          alert(response.data)
        } else {
          alert(response.data)
        }
      })
    }
  }
}
</script>

