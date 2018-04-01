<template>
  <nav>
    <div class="logo-section">
      <AppLogo />
    </div>
    <div class="primary-section">
      <ul>
        <li><AppNavbarDropdown title="Productos"
                              :products="[
                                {
                                  title: 'Web',
                                  description: 'La forma mas sencilla de hacer una pagina',
                                  url: '/'
                                },
                                {
                                  title: 'Facturacion',
                                  description: 'La forma mas sencilla de facturar siempre',
                                  url: '/'
                                }
                              ]"
        /></li>
        <li><AppNavbarDropdown title="Servicios" /></li>
        <li><AppNavbarDropdown title="Blog" /></li>
      </ul>
    </div>
    <div class="secondary-section">
      <AppButton text="Comenzar" />
      <a href="#">Ingresar</a>
    </div>
  </nav>
</template>

<script>
import AppLogo from '../../atoms/AppLogo'
import AppNavbarLink from '../../atoms/navbar/AppNavbarLink'
import AppNavbarDropdown from '../../molecules/navbar/AppNavbarDropdown'
import AppButton from '../../atoms/AppButton'

export default {
  name: 'AppNavbar',
  components: {
    AppLogo,
    AppNavbarLink,
    AppNavbarDropdown,
    AppButton
  }
}
</script>

<style scoped lang="css">
nav{
  height: 70px;			/* This is for the main menu bit at the top */
  /*width: 100%;			/* This means on every screen no matter the size, the width will cover the top  */
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  display: flex;
}
ul{
  display: inline-block;
  margin: 0;
  padding: 0;
}
li{
  text-decoration: none;
  list-style: none;
  display: inline-block;
}
.logo-section{
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.primary-section{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.secondary-section{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
