<template>
  <router-link :to="{ name: 'url', params: {} }">
    <div class="container">
      <div class="logo">
        <AppProductLogo />
      </div>
      <div class="desc">
        <AppProductTitle :title="title" />
        <AppProductDescription :description="description" />
      </div>
    </div>
  </router-link>
</template>

<script>
import AppProductLogo from '../../../atoms/navbar/product/AppProductLogo'
import AppProductTitle from '../../../atoms/navbar/product/AppProductTitle'
import AppProductDescription from '../../../atoms/navbar/product/AppProductDescription'

export default {
  name: 'AppProductItem',
  components: {
    AppProductLogo,
    AppProductTitle,
    AppProductDescription
  },
  props: {
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="css">
a{
  text-decoration: none;
}
a:hover .logo{

}
.container{
  display: flex;
}
.logo{
  display: inline-block;
  margin-right: 20px;
}
.desc{
  display: inline-block;
}
</style>
