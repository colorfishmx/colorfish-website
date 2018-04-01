<template>
  <div class="app-footer">
    <div class="logo-section">
      <AppLogo />
    </div>
    <div class="primary-section">
      <AppFooterMenu  title="Servicio"
                      :links="
                      [
                        {
                          title: 'Nosotros',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Colabora',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Mejoras',
                          url:'http://www.colorfish.mx'
                        }
                      ]"
                      class="footer-menu" />
      <AppFooterMenu  title="Producto"
                      :links="
                      [
                        {
                          title: 'Presentacion',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Aprendizaje',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Guias',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Base',
                          url:'http://www.colorfish.mx'
                        }
                      ]"
                      class="footer-menu" />
      <AppFooterMenu  title="Equipo"
                      :links="
                      [
                        {
                          title: 'Nosotros',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Unete',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Educacion',
                          url:'http://www.colorfish.mx'
                        }
                      ]"
                      class="footer-menu" />
      <AppFooterMenu  title="Terminos"
                      :links="
                      [
                        {
                          title: 'Terminos',
                          url:'http://www.colorfish.mx'
                        },
                        {
                          title: 'Condiciones',
                          url:'http://www.colorfish.mx'
                        }
                      ]"
                      class="footer-menu" />
    </div>
  </div>
</template>

<script>
import AppLogo from '../../atoms/AppLogo'
import AppFooterMenu from '../../molecules/footer/AppFooterMenu'

export default {
  name: 'AppFooter',
  components: {
    AppLogo,
    AppFooterMenu
  }
}
</script>

<style scoped lang="css">
.app-footer{
  padding-top: 95px;
  padding-bottom: 55px;
}

.logo-section{
  padding-bottom: 90px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primary-section{
  display: flex;
  justify-content: center;
  top: 0;
}

.footer-menu{
  display: inline-block;
  margin: 0 2.5em;
}
</style>
