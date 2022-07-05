<template>
    <form action="" id="form">
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="书名"
            v-model.trim="bookObj.bookname">
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="作者" v-model.trim="bookObj.author">
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="出版社"
            v-model.trim="bookObj.publisher">
        <button @click.prevent="addList" :disabled="item">新增</button>
    </form>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {
            bookObj: {
                bookname: '',
                author: '',
                publisher: ''
            },
        }
    },
    methods: {
        addList() {
            if (this.bookObj.bookname == '' || this.bookObj.author == '' || this.bookObj.publisher == '') return alert('内容不能为空！')
            this.$emit('addDat', this.bookObj);
            // 清空数据
            this.bookObj.bookname == '';
            this.bookObj.author == '';
            this.bookObj.publisher == '';
        }
    }
}
</script>

<style scoped>
#form {
    position: absolute;
    top: 286px;
    right: 350px;
}

.form-control {
    margin-bottom: 10px
}

button {
    width: 88px;
    height: 45px;
    border-radius: 10px;
    border: 0;
    background-color: aqua;
}
</style>