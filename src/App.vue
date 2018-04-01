<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'normalize.css';

@font-face {
  font-family: 'GothamRounded';
  src: url('./assets/fonts/GothamRounded-Light.otf');
  font-weight: lighter;
  font-style: normal;
}

@font-face {
  font-family: 'GothamRounded';
  src: url('./assets/fonts/GothamRounded-Medium.otf');
  font-weight: normal;
  font-style: normal;
}

/*@font-face {
  font-family: 'Circular Std Black';
  src: url('./assets/fonts/CircularStd-Black.eot');
  src: url('./assets/fonts/CircularStd-Black.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/CircularStd-Black.woff') format('woff'),
    url('./assets/fonts/CircularStd-Black.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}*/

#app {
  font-family: 'GothamRounded', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
