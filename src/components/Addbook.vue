<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">书名</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="请输入书名"
            v-model="bookname"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">作者</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="请输入作者名"
            v-model="author"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">出版社</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="请输入出版社"
            v-model="publisher"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn" @click.prevent="addFn" ref="myA">新增</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: "",
      author: "",
      publisher: "",
      timer: ""
    };
  },
  methods: {
    addFn() {
      if (
        this.bookname.length == 0 ||
        this.author.length == 0 ||
        this.publisher.length == 0
      ) {
        return alert("内容输入不完整，请输入完整内容");
      }
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher
        }
      }).then(res => {
        // this.list=res
      });
      //   console.log(this.$refs.myA);
      this.$refs.myA.disabled = true;
      this.timer = setInterval(function() {}, 3000);
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: skyblue;
}
</style>