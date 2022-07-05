<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="请输入书名"
        @keydown.enter="searchBook(bookname)"
        v-model="bookname"
      />
    </div>

    <div v-if="isShow" class="showbox">
      <div v-for="(item, index) in searchbook" :key="index">
        <span>序号：{{ item.id }}</span>
        <span>书名：{{ item.bookname }}</span>
        <span>作者：{{ item.author }}</span>
        <span>出版社：{{ item.publisher }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchbook: {
      type: Array,
      default: () => [],
    },
    isShow: false,
  },
  data() {
    return {
      bookname: "",
      
    };
  },
  methods: {
    searchBook(val) {
      // 非空判断
      if (val.trim().length == 0) {
        return alert("请输入书名");
      }
      this.$emit("search", val);
      this.bookname = "";
      // this.isShow = true;
    },
  },
};
</script>

<style scoped>
.search {
  height: 30px;
  width: 200px;
  /* border: 1px solid #ccc; */
  margin: 30px;
}
.showbox {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
