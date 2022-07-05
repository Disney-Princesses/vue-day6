<template>
  <div>
    <div class="form-group addbook">
      <input
        type="text"
        class="form-control"
        placeholder="书名"
        v-model="newBook.bookname"
      />
      <input
        type="text"
        class="form-control"
        placeholder="作者"
        style="margin: 10px 0"
        v-model="newBook.author"
      />
      <input
        type="text"
        class="form-control"
        placeholder="出版社"
        v-model="newBook.publisher"
      />
      <button
        type="button"
        class="btn btn-primary blue"
        @click.prevent="addBookFn"
        ref="addBtn"
      >
        新增
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    addBookFn() {
      this.$refs.addBtn.disabled = true;
      let { bookname, author, publisher } = this.newBook;
      if (
        bookname.trim().length == 0 ||
        author.trim().length == 0 ||
        publisher.trim().length == 0
      ) {
        this.clearInput();
        this.$refs.addBtn.disabled = false;
        return alert("内容不能为空");
      }
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          ...this.newBook,
        },
      }).then((res) => {
        let { data } = res;
        if (data.status !== 201) {
          this.$refs.addBtn.disabled = false;
          return alert(data.msg);
        }
        alert("添加图书成功");
        this.clearInput();
        this.$nextTick(() => {
          this.$parent.sendData();
          this.$refs.addBtn.disabled = false;
        });
      });
    },
    clearInput() {
      this.newBook.bookname = "";
      this.newBook.author = "";
      this.newBook.publisher = "";
    },
  },
};
</script>

<style scoped>
.addbook {
  position: absolute;
  top: 150px;
  left: 100px;
  width: 300px;
}
.blue {
  background-color: #0e6efc;
  color: #fff;
  margin-top: 10px;
}
</style>
