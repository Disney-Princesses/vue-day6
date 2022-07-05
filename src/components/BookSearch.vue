<template>
  <div class="input-group search" style="width:300px"> 
      <input
        type="text"
        class="form-control"
        placeholder="搜索-书本名称"
        aria-describedby="sizing-addon2"
        @keyup.enter="enter"
        v-model="searchName"
      />
      <button
        type="button"
        class="btn btn-primary"
        @click="goBackFn"
        v-show="isShow"
      >

        返回
      </button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchName: '',
            isShow: false
        }
    },
    methods: {
        enter(){
            this.isShow = true
            if (this.searchName.trim() == '') {
                this.searchName = ''
                return alert('Please enter a search name')
            }
            this.$axios({
                url: '/api/getbooks',
                method: 'GET',
                params: {
                    bookname: this.searchName
                }
            }).then(res => {
                let { data } = res
                if (data.status !== 200) return alert(data.msg)
                // console.log(data);
                if(data.data.length == 0) {
                    this.searchName = ''
                    return alert('经过查询暂无此书，请重新输入')
                }
                this.$emit('searchBooks', data.data)
            })
        },
        goBackFn(){
            this.$nextTick(() => {
                this.$parent.sendData()
                this.isShow = false
            })
        }
    }
}
</script>

<style>

</style>