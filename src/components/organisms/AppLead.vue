<template>
  <div :class="{ header: isHeader }" class="app-lead">
    <input v-model="email" type="text" name="" value="" placeholder="Ingresa tu email">
    <button @click="saveToDatabase" type="button" name="button">Comenzar</button>
  </div>
</template>

<script>
import db from '../firebaseInit'

export default {
  name: 'AppLead',
  data () {
    return {
      email: null
    }
  },
  methods: {
    saveToDatabase(){
      db.collection("usuarios").add({
        email: this.email,
        wants: 0
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }
  },
  props: {
    isHeader: {
      type: Boolean,
      required: false,
      default: false
    },
  }

}
</script>

<style scoped lang="scss">
  .app-lead{
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  input[type="text"], button{
    outline: none;
    border-radius: 50px;
    height: 100%;
  }

  input[type="text"]{
    border: 0px;
    background: #FFFFFF;
    width: 500px;
    height: 100%;
    padding: 0px 0px 0px 40px;
    color: #FA4262;
    font-size: 16px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #FA4262;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #FA4262;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
      color: #FA4262;
  }

  button{
    cursor: pointer;
    background: #FA4262;
    border-radius: 50px;
    color: #ffffff;
    border: none;
    width: 200px;
    height: 100%;
    margin-left: -205px;
    font-size: 16px;
  }

  .header{

    input[type="text"], button{
      outline: none;
      border-radius: 50px;
      height: 100%;
    }

    input[type="text"]{
      border: 2px solid #FA4262;
      background: transparent;
      width: 500px;
      height: 100%;
      padding: 0px 0px 0px 40px;
      color: #FA4262;
      font-size: 16px;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #FA4262;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #FA4262;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #FA4262;
    }

    button{
      cursor: pointer;
      background: #FA4262;
      border-radius: 50px;
      color: #ffffff;
      border: none;
      width: 200px;
      height: 100%;
      margin-left: -205px;
      font-size: 16px;
    }

  }
</style>
