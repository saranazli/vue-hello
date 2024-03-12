// io sono la destrutturazione di un oggetto
const { createApp } = Vue;

//io sono un metodo
createApp({

  //io sono un metodo che restituisce un oggetto
  data(){

    return{
      title : 'Buongiorno vue',
      img : {
        path: './img/legzira.jpg',
        alt : 'legzira'
      },
      isClicked : false
    }
  },

  // io sono un oggetto anche se mi chiamo metodo
  methods:{

  },

  // io sono un metodo
  mounted () {

  }

}).mount('#app')