<template>
  <div id="app">
    <header>
      <h1>Gerenciamento de Estoque</h1>
    </header>
    <nav>
      <router-link to="/" class="nav-link" exact>Lista de Itens</router-link>
      <router-link to="/add" class="nav-link">Adicionar Item</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="css" scoped>
/* Specific style for App.vue component */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

header {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
  margin-top: 20px;
}

.nav-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #0056b3;
}

.nav-link:hover {
  background-color: #0040a1;
}
</style>
