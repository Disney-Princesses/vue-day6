<template>
    <div id="box">
        <div class="col-xs-2">
            <input type="text" class="form-control" placeholder="搜索-书本名称" v-model.trim="inpVal" @keyup.enter="searchFn">
        </div>
        <table class="table table-bordered table-hover">
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
                <tr v-for="item in list " :key='item.id'>
                    <td>{{ item.id }}</td>
                    <td>{{ item.bookname }}</td>
                    <td>{{ item.author }}</td>
                    <td>{{ item.publisher }}</td>
                    <td id="test">
                        <a href="#" class="btn btn-warning " role="button" @click.prevent="delData(item.id)">删除</a>
                        <a href="#" class="btn btn-info " role=" button" @click.prevent="searchId(item.id)">详情</a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            inpVal: ''
        }
    },
    props: ['list'],
    methods: {
        // 删除
        delData(id) {
            this.$emit('delList', id)
        },
        // 搜索
        searchFn() {
            if (this.inpVal == '') return alert('内容不能为空！')
            this.$emit('searchFn', this.inpVal)
        },
        // 详情
        searchId(id) {
            this.$emit('searchId', id)
        }
    }
}
</script>

<style scoped>
#box {
    width: 900px;
    margin: 100px 200px;
}

/* 输入框 */
.col-xs-2 {
    margin-bottom: 10px
}

.form-control {
    width: 189px;
}

.btn-warning {
    border: 0;
    background-color: rgb(248, 72, 101) !important
}

/* .btn-default {} */
#test {
    display: flex;
    justify-content: space-evenly;
}
</style>