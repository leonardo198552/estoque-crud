let itens = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 5 },
  ];
  
  export default {
    getItens() {
      return itens;
    },
    getItem(id) {
      return itens.find(item => item.id === parseInt(id));
    },
    addItem(item) {
      item.id = itens.length + 1;
      itens.push(item);
    },
    updateItem(updatedItem) {
      const index = itens.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        itens.splice(index, 1, updatedItem);
      }
    },
    deleteItem(id) {
      itens = itens.filter(item => item.id !== parseInt(id));
    }
  };
  