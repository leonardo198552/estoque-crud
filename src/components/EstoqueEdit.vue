<template>
    <div>
      <h1>Editar Item do Estoque</h1>
      <form @submit.prevent="editItem">
        <label>Nome:</label>
        <input v-model="item.name" required />
        <label>Quantidade:</label>
        <input type="number" v-model="item.quantity" required />
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
  import estoqueService from '../services/estoqueService';
  
  export default {
    data() {
      return {
        item: {}
      };
    },
    created() {
      this.fetchItem();
    },
    methods: {
      fetchItem() {
        const id = this.$route.params.id;
        this.item = estoqueService.getItem(id);
      },
      editItem() {
        estoqueService.updateItem(this.item);
        this.$router.push('/');
      }
    }
  };
  </script>
  