<template>
  <ul>
    <h2>{{ title }}</h2>

    <li v-for="link in links"><a :href="link.url">{{ link.title }}</a></li>
  </ul>
</template>

<script>

export default {
  name: 'AppFooterMenu',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="css">
ul{
  list-style: none;
  padding: 0;
  text-align: left;
}
h2{
  color: #2c3e50;
  font-size: 16px;
}
li{
  margin:15px 0px;
}
li a{
  color: #9FACBD;
  text-decoration: none;
  font-size: 14px;
}

</style>
