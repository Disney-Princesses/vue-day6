<template>
  <div id="app">
    <h1>图书管理列表</h1>
    <BookHeader :list="list" @delList="delList" @searchFn="searchData" @searchId="searchFn"></BookHeader>
    <BookFooter @addDat="addList" :item="item"></BookFooter>
    <BookMask v-if="isShow" @isHideFn="HideFn" :maskData="maskData"></BookMask>
  </div>
</template>

<script>
import BookHeader from './components/BookHeader.vue'
import BookFooter from './components/BookFooter.vue'
import BookMask from './components/BookMask.vue'
export default {
  data() {
    return {
      list: [],
      item: false,
      isShow: false,
      maskData: {
        id: '',
        bookname: '',
        author: '',
        publisher: ''
      }
    }
  },
  components: {
    BookHeader,
    BookFooter,
    BookMask
  },
  // 挂载后获取数据
  mounted() {
    this.$axios({
      url: '/api/getbooks'
    }).then(res => {
      this.list = res.data.data
    })
  },
  methods: {
    // 添加数据
    addList(val) {
      // 让按钮置灰
      this.item = true
      this.$axios({
        url: "/api/addbook",
        method: 'post',
        data: {
          ...val
        }
      }).then(res => {
        // 提示添加成功
        alert("添加数据成功！")
        // 刷新页面
        location.reload(true)
        // 让按钮恢复可以点击状态
        this.item = false
      }).catch(err => {
        //失败
        alert("添加失败" + err.message)
      })
    },
    // 删除数据
    delList(id) {
      this.$axios({
        url: "/api/delbook",
        params: { id: id }
      }).then(res => {
        console.log(res);
        alert(res.data.msg);
        // 刷新页面
        if (res.data.status == 200) {
          location.reload(true)
        }
      }).catch(err => {
        //失败
        alert("删除失败" + err.message)
      })
    },
    // 搜索数据
    searchData(val) {
      this.$axios({
        url: "/api/getbooks",
        params: {
          bookname: val
        }
      }).then(res => {
        this.list = res.data.data
      })

    },
    // 详情
    searchFn(id) {
      this.isShow = true
      this.$axios({
        url: "/api/getbooks",
        params: {
          id: id
        }
      }).then(res => {
        this.maskData = res.data.data[0]
      })
    },
    // 关闭详情
    HideFn() {
      this.isShow = false
    }

  }
}

</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
  padding: 50px 0 !important;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  /* height: auto; */
}

#app {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 1000px;
}
</style>