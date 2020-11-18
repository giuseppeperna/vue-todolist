const todoApp = new Vue ({
  el:'#todoApp',
  data: {
    items:"",
    todoElements:[],
    selectedElements: [],
    isActive:false,
  },
  methods: {
    pushItem: function () {
      return this.todoElements.push(this.items);
    },
    removeItem: function () {
      return this.todoElements.pop(this.items);
    },
    toggleItem: function(e) {
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
