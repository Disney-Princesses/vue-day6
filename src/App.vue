<template>
  <div>
    <h1>图书列表管理</h1>
    <!-- 搜索框 -->
    <searchBookS @search="searchBook" :searchbook="searchbook" :isShow="isShowF"></searchBookS>

    <!-- 图书列表主体 -->
    <table class="table table-bordered booklist">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <bookTr
          v-for="item in booklist"
          :key="item.id"
          :booklist="item"
          @del="delBookFn"
        ></bookTr>
      </tbody>
    </table>

    <!-- 添加图书 -->
    <addBookS @add="addBookFn" ref="sonAdd"></addBookS>
  </div>
</template>

<script>
import bookTr from "./components/BookTr.vue";
import searchBookS from "./components/searchBooks.vue";
import addBookS from "./components/addBook.vue";
export default {
  data() {
    return {
      booklist: {},
      searchbook: [],
      isShowF: false,
    };
  },
  methods: {
    // 封装获取图书列表的请求
    getBookList() {
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        let { data } = res;
        console.log(data);
        this.booklist = data.data;
      });
    },
    // 搜索图书
    searchBook(val) {
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        let { data } = res;
        // console.log(data.data);
         let newArr =  data.data.filter((ele) => {
          return ele.bookname == val;

        });
        if(newArr.length == 0) {
          this.isShowF=false
          return alert('没有该书')
        }
        this.searchbook=newArr
        console.log(this.searchbook);
        this.isShowF=true
      });
    },
    // 添加图书
    addBookFn(addbook) {
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          ...addbook,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status == 201) {
          // console.log(111);
          //  location.reload()
          console.log(res);
          this.getBookList();
          // 真不错
          this.$refs.sonAdd.$refs.btn.disabled=false
          return alert("添加成功");
        } else {
          alert("添加失败");
        }
      });
    },
    // 删除图书
    delBookFn(id) {
      this.$axios({
        url: "/api/delbook",
        params: {
          id: id,
        },
      }).then((res) => {
        // console.log(res);
        if (res.data.status == 200) {
          this.getBookList();
          return alert("删除成功");
        } else {
          return alert(" 删除失败 ");
        }
      });
    },
  },
  // 挂载
  mounted() {
    // 调用获取信息函数
    this.getBookList();
  },
  // 组件
  components: {
    bookTr,
    searchBookS,
    addBookS,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.booklist {
  margin: 30px;
}
</style>
