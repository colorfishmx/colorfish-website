<template>
  <a href="#">{{text}}</a>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped lang="css">
a{
  text-decoration: none;
  color: #fff;
  padding: 15px 60px;
  background: #f9427a;
  border-radius: 50px;
}
</style>
