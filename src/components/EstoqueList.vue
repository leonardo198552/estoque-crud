<template>
    <div>
      <h1>Lista de Itens do Estoque</h1>
      <router-link to="/add">Adicionar Item</router-link>
      <ul>
        <li v-for="item in itens" :key="item.id">
          {{ item.name }} - {{ item.quantity }}
          <router-link :to="'/view/' + item.id">Ver</router-link>
          <router-link :to="'/edit/' + item.id">Editar</router-link>
          <button @click="deleteItem(item.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import estoqueService from '../services/estoqueService';
  
  export default {
    data() {
      return {
        itens: []
      };
    },
    created() {
      this.fetchItens();
    },
    methods: {
      fetchItens() {
        this.itens = estoqueService.getItens();
      },
      deleteItem(id) {
        estoqueService.deleteItem(id);
        this.fetchItens();
      }
    }
  };
  </script>
  