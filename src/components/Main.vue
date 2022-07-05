<template>
  <div id="app">
    <div class="container">
      <!-- 数据表格 -->

        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索-书本名称" v-model='bookname' @keyup.enter='selbook'/>
          </div>
        </div>
      <table class="table table-bordered table-hover mt-2">
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
          <tr v-for='item in list' :key='item.id'>
            <td>{{item.id}}</td>
            <td>{{item.bookname}}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td>{{item.author}}</td>
            <td>{{item.publisher}}</td>
            <td><a href="#" @click='del(item.id)'>删除</a><a href="#" @click='detail(item.id)'>详情</a></td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname:'',
      // newList:this.list,
    };
  },
  props:{
    list:{
        type:Array,
        default:()=>[],
    },
  },
  methods:{
    del(id){
        const index=this.$parent.list.findIndex(ele=>ele.id==id);
        this.$parent.list.splice(index,1);
        // this.$parent.list
    },
    detail(id){
        const index=this.$parent.list.findIndex(ele=>ele.id==id);
        const detail=this.$parent.list[index];
        alert(`书名：${detail.bookname}\n作者:${detail.author}\n出版社：${detail.publisher}`);
    },
    selbook(){
      this.$emit('changeList',this.bookname);
      this.bookname='';
      // this.newList=this.$parent.list.filter(ele=>ele.bookname==bookname);
    },
  },
};
</script>

<style scoped>
input{
    margin-top:50px;
}
</style>