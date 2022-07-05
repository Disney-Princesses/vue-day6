<template>
  <div>
    <input type="text" placeholder="书名" v-model='obj.bookname'>
    <input type="text" placeholder="作者" v-model='obj.author'>
    <input type="text" placeholder="出版社" v-model='obj.publisher'>
    <button @click='addbook'>新增</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{
                bookname:'',
                author:'',
                publisher:'',
            },
        }
    },
    methods:{
        addbook(){
            this.$emit('addbook',this.obj);
            // 清空input框
            this.obj.bookname='';
            this.obj.author='';
            this.obj.publisher='';
        }
    },
}
</script>

<style scoped>
input{
    display: block;
    width: 200px;
    height: 35px;
    margin-bottom:10px;
    margin-left:20px;
}
button{
    margin-left:20px;
    background-color: #0c6efd;
    color:#fff;
    border:0px;
    border-radius: 5px;
}

</style>