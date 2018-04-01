<template>
  <div>
    <a :href='href'>
      <span>{{ text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppNavbarLink',
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped lang="css">
div{
  display:inline-block;
  margin-left: 15px;       /* This is when the drop down box appears */
  position: relative;
}

a{
  color: rgb(160,160,160);
  text-decoration: none;
  font-size: 14px;
  line-height: 70px;		/* This bit chances the size of the text on the main heading */
  padding: 15px 24px;		/* This is the padding between the different titles */
  -webkit-transition: color .15s;
     -moz-transition: color .15s;
       -o-transition: color .15s;
          transition: color .15s;
}

a:hover{
  color: green;
}

</style>
