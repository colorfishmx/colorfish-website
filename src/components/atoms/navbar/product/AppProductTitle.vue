<template>
  <h3>{{title}}</h3>
</template>

<script>
export default {
  name: 'AppProductTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="css">
h3{
  margin: 0;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .025em;
}
</style>
