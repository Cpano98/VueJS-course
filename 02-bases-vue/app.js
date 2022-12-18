//console.log(Vue)

const app = Vue.createApp({
    template: `
    <h1>Hola Mundo</h1>
    <p> Desde app.js </p>

    <p> Variables: {{ 1 + 1 }} </p>

    <p> {{ !true ? 'Activo' : 'Inactivo' }} </p>

    `
})


app.mount("#myApp");