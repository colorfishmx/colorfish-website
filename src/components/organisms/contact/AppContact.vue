<template>
  <form @submit.prevent="enviar">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="formulario.nombre">

      <label for="apellidos">Apellidos:</label>
      <input type="text" id="apellidos" v-model="formulario.apellidos">

      <label for="consulta">Consulta:</label>
      <textarea id="consulta" rows="5" v-model="formulario.consulta"></textarea>


      <input type="radio" id="si" value="Si" v-model="formulario.cliente">
      <label for="si">Soy cliente</label>
      <br>
      <input type="radio" id="no" value="No" v-model="formulario.cliente">
      <label for="no">No soy cliente</label>
      <br>

      <label for="conocio">Donde nos conocio, en que lugar se enamoro de nosotros?</label>
      <select id="conocio" v-model="formulario.conocio">
          <option v-for="opcion in conocio" :key="opcion" :value="opcion">
              {{ opcion }}
          </option>
      </select>
      <input type="checkbox" id="acepto" v-model="formulario.acepta">

      <label for="acepto">Acepto las condiciones</label>
      <input type="submit" value="Enviar">
    <hr>
    <pre>{{ $data}}</pre>
  </form>
</template>

<script>
export default {
   name: 'AppContact',
    data () {
        return{
            formulario: {
                nombre: null,
                apellidos: null,
                consulta: null,
                cliente: null, 
                conocio: null,
                acepta: null,
            },
            conocio: [    
                'Amigo o familiar',
                'internet',
                'tv oradio',
            ]
        }
    },
    methods: {
        enviar(){
            for(let key in this.formulario){
                console.info(`${key} : ${this.formulario[key]}`)
            }
        }
    }
}
</script>
<style scoped lang="css">

</style>
