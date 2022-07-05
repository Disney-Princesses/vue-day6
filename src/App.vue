<template>
  <div>
    <Main :list="newList" @changeList="changeList"></Main>
    <Footer @addbook="addbookFn"></Footer>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Main,
    Footer,
  },
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  mounted() {
    this.getbook();
  },
  methods: {
    addbookFn(val) {
      this.$axios({
        method: "POST",
        url: "/api/addbook",
        data: {
          ...val,
        },
      }).then((res) => {
        if (res.data.status == 201) {
            this.getbook();
        }
      });
    },
    getbook() {
      this.$axios({
        method: "GET",
        url: "/api/getbooks",
      }).then((res) => {
        this.list = res.data["data"];
        this.newList = this.list;
      });
    },
    changeList(bookname) {
      if (this.list.filter((ele) => ele.bookname == bookname).length == 0) {
        return alert("没有找到该书");
      }
      this.newList = this.list.filter((ele) => ele.bookname == bookname);
    },
  },
};
</script>

<style>
</style>
