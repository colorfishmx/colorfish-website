<template>
  <div class="">


    <header>

      <AppNavbar class="app-navbar"/>

        <div class="banner">
          <div class="container">


            <div class="grid">

              <div class="primary">
                <h1>Facturar nunca habia sido tan sencillo</h1>
                <h3>Con colorfish, nunca habia sido tan sencillo facturar, aun asi, nosotros podemos facturar por ti. Tu solo dedicate a hacer un producto unico.</h3>
                <div class="app-lead">
                  <AppLead :isHeader="true"/>
                </div>

              </div>

              <div class="secondary">
                <div class="temp-image"></div>
              </div>

            </div>

          </div>
        </div>

      <AppTrustProof />

    </header>

    <section>
      <div class="container">
        <AppShowOff />
      </div>
    </section>

    <section class="lead">
      Listo para comenzar con tu pagina web?
      <div>
        <AppLead class="app-lead"/>
      </div>
    </section>

    <footer class="container">
      <AppFooter />
    </footer>

  </div>
</template>

<script>
import AppContact from '../organisms/contact/AppContact'


import AppLead from '../organisms/AppLead'


import AppNavbar from '../organisms/navbar/AppNavbar'
import AppTrustProof from '../molecules/intro/AppTrustProof'

import AppShowOff from '../organisms/AppShowOff'

import AppFooter from '../organisms/footer/AppFooter'

export default {
  name: 'AppIndex',
  data () {
    return {
    }
  },
  components: {
    AppContact,
    AppNavbar,
    AppTrustProof,
    AppLead,
    AppShowOff,
    AppFooter,
  }
}
</script>

<style scoped lang="css">
.temp-image{
  background-image: url("../../assets/artboard-1.png");
                            background-size: 779px 541px;
                            background-position: center;
                            background-repeat: no-repeat;
                            position: absolute;
                            height: 561px;
margin-left: 20px;
margin-top: -100px;
width: 779px;
}



header{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #051A26;
  /*background: linear-gradient(-45deg,#56CCF2,#2F80ED);*/
}
nav{
  padding: 8px 40px;
  background: transparent;
}

.app-navbar{
  z-index: 1;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.grid{
  display: grid;
  grid-template-columns: 30% 70%;
}
.banner{
  padding-top: 80px;
  padding-bottom: 80px;
  overflow: hidden;
  vertical-align: baseline;
  position: relative;
  padding-left: 60px;
  padding-right: 60px;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.primary{
  width: calc(100% / 1.8);
  text-align: left;
}
.hero-column{
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0;
  padding: 0;
  justify-content: center;
}

h1{
  font-size: 2.4em;
}

header .app-lead{
  height: 50px;
}


.lead{
  background: linear-gradient(90deg, rgb(235,11,132),rgb(250,66,98));
  color: #fff;
  font-size: 2em;
  padding: 2em 0;
}

.lead .app-lead{
  height: 50px;
}


</style>
