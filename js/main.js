/**
@file Creare una web app con Vue che permetta ad un utente di:
1) Inserire un elemento nella lista
2) Rimuovere un elemento dalla lista
3) Evidenziare gli elementi della lista per contrassegnarli come completati
*/

// Init Vue Object
const todoApp = new Vue ({
  el:'#todoApp',
  data: {
    items:"", // dato di input inserito dall'utente
    todoElements:[], // collezione dei dati inseriti e mostrati tramite lista
    selectedElements: [], // collezione degli elementi contrassegnati come completati
    isActive:false,
  },
  methods: {
    pushItem: function () { // inserisce l'elemento nella to-do list
      while (this.items != "") {
        this.todoElements.push(this.items);
        this.items ="";
        this.isActive = false;
      }
    },
    removeItem: function (index) { // elimina l'elemento dalla to-do list
      this.todoElements.splice(index, 1);
    },
    toggleItem: function(e) { // controlla se un elemento è presente tra i contrassegnati e in caso contrario lo aggiunge.
      if (this.selectedElements.includes(e)) {
        this.selectedElements = this.selectedElements.filter(
          (item) => item !== e
        );
      } else {
        this.selectedElements.push(e);
      }
    },
  }
})
