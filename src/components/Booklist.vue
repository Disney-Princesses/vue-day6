<template>
  <div id="form">
    <input type="text" placeholder="搜索-书本名称" v-model.trim="bookname" @keydown.enter="search" />
    <table class="table table-bordered">
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
        <tr v-for="item in booklist" :key="item.id" :list='booklist.item'>
          <td>{{item.id}}</td>
          <td>{{item.bookname}}</td>
          <td>{{item.author}}</td>
          <td>{{item.publisher}}</td>
          <td>
            <a href="javascript:;" @click="del(item.id)">删除</a>
            <a href="javascript:;" @click="detail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="detals" ref="myD" v-show="show" @click="{show=!show}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklist: [],
      bookname: "",
      msg:'',
      show:false
    };
  },
  mounted() {
    this.$axios({
      url: "/api/getbooks"
    }).then(res => {
      this.$nextTick(() => {
        this.booklist = res.data.data;
        console.log(this.booklist);
      });
    });
  },
  methods: {
    search() {
      if (this.bookname.length == 0) {
        return alert("请输入书名");
      }
      const fbook = this.booklist.filter(ele => ele.bookname == this.bookname);
      this.booklist = fbook;
    },
    del(id) {
      this.$axios({
        url: "/api/delbook",
        params: {
          id
        }
      }).then(res => {
        console.log(res);
        const index = this.booklist.findIndex(ele => ele.id == id);
      this.booklist.splice(index, 1);
      });
      // const index = this.booklist.findIndex(ele => ele.id == id);
      // this.booklist.splice(index, 1);
    },
    detail(id) {
      this.show = true;
      const index = this.booklist.findIndex(ele => ele.id == id);
      console.log(this.booklist[index]);
      this.$refs.myD.innerHTML = JSON.stringify(this.booklist[index]);
    }
  }
};
</script>

<style scoped>
#form {
  width: 1000px;
}
#detals {
  width: 200px;
  /* height: 200px; */
  /* background-color: pink; */
  position: relative;
  left: 800px;
  text-align: center;
  /* display: none; */
}
</style>