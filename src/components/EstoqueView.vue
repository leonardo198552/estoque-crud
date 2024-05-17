<template>
    <div>
      <h1>Detalhes do Item do Estoque</h1>
      <p>Nome: {{ item.name }}</p>
      <p>Quantidade: {{ item.quantity }}</p>
      <router-link to="/">Voltar</router-link>
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
      }
    }
  };
  </script>
  