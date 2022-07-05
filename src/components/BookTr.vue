<template>
  <tr>
    <td>{{ booklist.id }}</td>
    <td>{{ booklist.bookname }}</td>
    <td>{{ booklist.author }}</td>
    <td>{{ booklist.publisher }}</td>
    <td><a href="javascript:;" @click="delBook(booklist.id)">删除</a></td>
    <td><a href="javascript:;">详情</a></td>
  </tr>
</template>

<script>
export default {
  props: {
    booklist: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {
    delBook(id) {
      this.$emit('del',id)
    }
  }
};
</script>

<style></style>
