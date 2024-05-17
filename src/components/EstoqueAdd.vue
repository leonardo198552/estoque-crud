<template>
    <div>
      <h1>Adicionar Item ao Estoque</h1>
      <form @submit.prevent="addItem">
        <label>Nome:</label>
        <input v-model="item.name" required />
        <label>Quantidade:</label>
        <input type="number" v-model="item.quantity" required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  import estoqueService from '../services/estoqueService';
  
  export default {
    data() {
      return {
        item: {
          name: '',
          quantity: 0
        }
      };
    },
    methods: {
      addItem() {
        estoqueService.addItem(this.item);
        this.$router.push('/');
      }
    }
  };
  </script>
  