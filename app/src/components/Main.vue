<template>
  <div style="height:600px">
    <iframe id="frame" :src="urlGenerator" title="W3Schools Free Online Web Tutorials"></iframe>
  </div>
</template>

<script>

export default {
  name: "Main",
  data: function () {
    return {games: this.$route.params.games, currGame: 0}
  },
  computed: {
    urlGenerator: function () {
      const gamePos = this.games[this.currGame]
      return `https://lichess.org/embed/${gamePos.id}/${gamePos.color}#${gamePos.moveNum}`
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>