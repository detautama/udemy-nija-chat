<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="orange-text darken-4">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn green darken-4">Enter Chat</button>
        </form>
        <p>I Putu Deta Utama Putra</p>
        <p><a target="_newtab" href="https://web.facebook.com/putudeta11">Facebook</a> - <a arget="_newtab" href="https://github.com/detautama">Github</a> - <a arget="_newtab" href="https://www.linkedin.com/in/deta-u-8bb1a7107">LinkedIn</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods : {
    enterChat () {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name for join'
      }
    }
  }
}
</script>

<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }

  .welcome h2 {
    font-size: 3em;
  }

  .welcome button {
    margin: 30px auto;
  }
</style>
