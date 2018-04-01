<template>
  <p>{{description}}</p>
</template>

<script>
export default {
  name: 'AppProductDescription',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="css">
p{
  font-size: 15px;
  line-height: 22px;
  color: #6b7c93;
  margin: 5px 0 0;
  display: block;
}
</style>
