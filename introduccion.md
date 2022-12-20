## Crear proyectos:

    vue create 03-fundamentos

### Estructura básica:

```
<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
```

Misma que se creó usando:

    vue

#### Componente Counter básico: importación en "App.vue"

```
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter />
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

#### Sumatorias

```
this.counter += 1   es igual    this.counter++ o this.counter--
```


## Props:

### Manera 1:
    props: ["TituloLibro", "start"]

### Manera 2:

```
 props: {
    TituloLibro: String,
    start: Number
  },
```

# SASS

Instalar dependencias de desarrollo para uso de SASS.

```
yarn add -D sass-loader@10 sass
yarn add bootstrap
```


En main.js:
  import './styles/styles.scss'

Se creó la carpeta de "styles" -- > "styles.scss".
