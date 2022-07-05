<template>
  <div>
    <!-- 搜索功能组件 -->
    <BookSearch @searchBooks="searchBooksFn"></BookSearch>
    <table class="table table-bordered" style="width: 800px">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- 表格主体渲染组件 -->
        <TableTr
          :books="item"
          v-for="item in bookList"
          :key="item.id"
        ></TableTr>
      </tbody>
    </table>
    <AddBooks></AddBooks>
  </div>
</template>

<script>
import TableTr from "./components/TableTr.vue";
import BookSearch from "./components/BookSearch.vue";
import AddBooks from "./components/AddBooks.vue";
export default {
  components: {
    TableTr,
    BookSearch,
    AddBooks,
  },
  //挂载完成的时候请求书本数据渲染表格
  mounted() {
    this.sendData();
  },
  data() {
    return {
      bookList: [],
    };
  },
  methods: {
    sendData() {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
      }).then((res) => {
        // console.log(res);
        let data = res.data;
        this.bookList = data.data;
      });
    },
    searchBooksFn(data) {
      this.bookList = data;
    },
  },
};
</script>

<style scoped>
table {
  text-align: center;
  margin: 0 auto;
}

.search {
  margin: 100px auto 10px;
}
</style>
