<template>
  <div class="app-navbar-dropdown">
    <AppNavbarLink class="app-navbar-link" :text="title" href=""/>
    <ul>
      <li v-for="product in products" class="item">
        <AppProductItem :title="product.title" :description="product.description" :url="product.url"/>
      </li>
    </ul>
  </div>
</template>

<script>
import AppNavbarLink from '../../atoms/navbar/AppNavbarLink'
import AppProductItem from './product/AppProductItem'

export default {
  name: 'AppNavbarDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    AppNavbarLink,
    AppProductItem
  }
}
</script>

<style scoped lang="css">
.item{
  padding: 20px 40px;
}
li{
  list-style: none;
}
.app-navbar-dropdown{
  list-style: none;
  float: left;
  /*margin-left: 15px;       /* This is when the drop down box appears */
  position: relative;
}

.app-navbar-dropdown:hover ul{
  opacity: 1;
  top: 65px;			/* This is how far from the top the drop down annimation will go  */
  visibility: visible;
}

ul:before{
  content: '';
  display: block;
  border-color: transparent transparent rgb(255,255,255) transparent;
  border-style: solid;
  border-width: 10px;  /* The border on the drop down box  */
  position: absolute;

  top: -20px;


  left: 50%;
  margin-left: -10px;

}

ul{
  opacity: 0;
  visibility: hidden;
  padding: 20px 0 20px 0;
  background-color: rgb(255,255,255);
  text-align: left;  /* This is for the text when box is dropped down, centered isnt always totally in the middle so best to have on the left */
  position: absolute;

  top: 55px;			/* This is for the drop down annimation */

  left: 50%;
  margin-left: -185px;
  min-width: 370px;

  -webkit-transition: all .3s .1s;
     -moz-transition: all .3s .1s;
       -o-transition: all .3s .1s;
          transition: all .3s .1s;

  -webkit-border-radius: 5px;
     -moz-border-radius: 5px;
          border-radius: 5px;




  -webkit-box-shadow: 0px 0px 30px rgba(156,156,156,.4);
     -moz-box-shadow: 0px 0px 30px rgba(156,156,156,.4);
          box-shadow: 0px 0px 30px rgba(156,156,156,.4);
}
</style>
