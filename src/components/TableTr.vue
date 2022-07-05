<template>
  <tr>
    <td>{{books.id}}</td>
    <td>{{books.bookname}}</td>
    <td>{{books.author}}</td>
    <td>{{books.publisher}}</td>
    <td><a href="javascript:;" @click="del(books.id)">删除</a><a href="javascript:;" @click="detailsFn(books.id)">详情</a></td>
  </tr>
  
</template>

<script>
export default {
    props: {
        books: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        del(id){
            this.$axios({
                url: '/api/delbook',
                method: 'GET',
                params: {
                    id
                }
            }).then(res => {
                // console.log(res);
                let { data } = res
                if (data.status !== 200) return alert(data.msg)
                alert('删除图书成功')
                this.$nextTick(() => {
                    this.$parent.sendData()
                })
            })
        },
        detailsFn(id){
            this.$axios({
                url: '/api/getbooks',
                method: 'GET',
                params: {
                    id
                }
            }).then(res => {
                // console.log(res);
                let { data } = res
                if (data.status !== 200) return alert(data.msg)
                alert(`这本书的书名是《${data.data[0].bookname}》，作者是${data.data[0].author}，出版社是${data.data[0].publisher}`)
            })
        }
    }
};
</script>

<style></style>
