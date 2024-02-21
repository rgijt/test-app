<template>
  <div>
    <img alt="Goat icon" src="./assets/icons8-year-of-goat-48.png" />
    <h1>The GOAT</h1>
    <button @click="clickFunc">CLICK</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    var clickFunc = () => {
      alert('You clicked me!!!');
    };

    return {
      clickFunc,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
