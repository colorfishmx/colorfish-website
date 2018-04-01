<template>
  <div class="">


    <header>

      <AppNavbar class="app-navbar"/>

        <div class="row hero">

          <div class="hero-column">
            <div class="">
              <h1>El sistema que te ayuda a crecer tu negocio</h1>
              <h3>Has algo nuevo ahora para que no puedas hacer algo janas</h3>
              <a class="button" href="#">Get started</a> or <a href="#">Request a demo</a>
            </div>
          </div>

          <div class="column">
            Aqui va la otra
          </div>

        </div>

      <AppTrustProof />

    </header>


    <section class="tour">
      <div><AppContact /></div>
      <div class="row">
        <div class="column">
          <img src="https://symu.co/app/plugins/wp/resources/img/main/slide/slide-1-bg.png" style="width:100%;" alt="">
        </div>
        <div class="column left">
          Haz que tu negocio crezca mucho mas rapido ahora mismo ya .com
        </div>
      </div>
      <div class="row">
        <div class="column right">
          Haz que tu negocio crezca mucho mas rapido ahora mismo ya .com
        </div>
        <div class="column">
          <img src="https://symu.co/app/plugins/wp/resources/img/main/slide/slide-2-bg.png" style="width:100%;" alt="">
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="https://symu.co/app/plugins/wp/resources/img/main/slide/slide-3-bg.png" style="width:100%;" alt="">
        </div>
        <div class="column left">
          Haz que tu negocio crezca mucho mas rapido ahora mismo ya .com
        </div>
      </div>
      <div class="row">
        <div class="column right">
          Haz que tu negocio crezca mucho mas rapido ahora mismo ya .com
        </div>
        <div class="column">
          <img src="https://symu.co/app/plugins/wp/resources/img/main/slide/slide-4-bg.png" style="width:100%;" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppContact from '../organisms/contact/AppContact'



import AppNavbar from '../organisms/navbar/AppNavbar'
import AppTrustProof from '../molecules/intro/AppTrustProof'

export default {
  name: 'AppIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    AppContact,
    AppNavbar,
    AppTrustProof
  }
}
</script>

<style scoped lang="css">
header{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
}
nav{
  padding: 8px 40px;
  background:#fff;
}
.app-navbar{
  z-index: 1;
}
.hero{
  position: absolute !important;
  height: 100%;
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
.button{
  text-decoration: none;
  color: #00a8ff;
  background: #fff;
  padding: 20px 40px;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 600;
}
.tour{}
.row{
  width: 100%;
  display: flex;
  position: relative;
}
.column{
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0;
  padding: 0;
}
.right{
  justify-content: flex-end;
}
.left{
  justify-content: flex-start;
}
</style>
