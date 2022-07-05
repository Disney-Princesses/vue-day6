<template>
  <div class="addbook">
    <p>书名：<input type="text" v-model="addbook.bookname"/></p>
    <p>作者：<input type="text" v-model="addbook.author"/></p>
    <p>出版社：<input type="text" v-model="addbook.publisher"/></p>
    <button @click="addBook(addbook)" ref="btn">添加</button>
  </div>
</template>

<script>
export  default {
  data() {
   return {
     addbook:{
      bookname:'',
      author:'',
      publisher:''
     },
    //  istrue:false
   }
  },
  methods: {
    addBook(addbook) {
      if(addbook.bookname.trim().length == 0||addbook.bookname.trim().length == 0||addbook.bookname.trim().length == 0) {
        return alert('请把信息添完整哟~')
      }
      this.$refs.btn.disabled=true
      this.$emit('add',addbook)
      this.addbook.bookname=''
      this.addbook.author=''
      this.addbook.publisher=''
    }
  }
};
</script>

<style scoped>
.addbook {
    padding:10px;
    margin: 30px;
    width: 300px;
    border: 1px solid rgb(12, 84, 155);
}
.addbook input{
border: 1px solid rgb(135, 168, 213);
width: 150px;
height: 30px;
margin: 5px 10px;
}

</style>>
</style>
