<template>
  <div>
    <BookList></BookList>
    <AddBook></AddBook>
  </div>
</template>

<script>
import BookList from './components/Booklist.vue'
import AddBook from './components/Addbook.vue'
export default {
components:{
  BookList,
  AddBook
}
}
</script>

<style>

</style>