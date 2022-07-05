<template>
    <!-- 遮罩层 -->
    <div class="mask" ref="dome">
        <div class="form-group">
            <h2>详情信息</h2>
            <button type="button" class="btn btn-warning" @click.prevent="isHide">关闭</button>
            <form action="" id="form">
                <div>
                    <span>ID :</span> <input type="text" class="form-control" id="exampleInputEmail1" readonly="true"
                        v-model.trim="maskData.id">
                </div>
                <div>
                    <span>书名 :</span> <input type="text" class="form-control" id="exampleInputEmail1" readonly="true"
                        v-model.trim="maskData.bookname">
                </div>
                <div>
                    <span>作者 :</span> <input type="text" class="form-control" id="exampleInputEmail1" readonly="true"
                        v-model.trim="maskData.author">
                </div>
                <div>
                    <span>出版社 :</span> <input type="text" class="form-control" id="exampleInputEmail1" readonly="true"
                        v-model.trim="maskData.publisher">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isShow', 'maskData'],
    methods: {
        isHide() {
            this.$emit('isHideFn')
        }
    },
}
</script>

<style scoped>
/* 遮罩层 */
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
}

.form-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 330px;
    background-color: #fff;
}

.form-group h2 {
    margin-top: 15px;
    text-align: center;
}

.btn-warning {
    position: absolute;
    top: 22px;
    right: 3px;
    margin-right: 10px;
}

#form {
    margin: 50px auto;
    width: 300px;
    height: 200px;
}

#form>div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

#form>div span {
    line-height: 2;
}

input {
    display: inline-block;
    width: 70%;
}

.form-control:focus {
    /* border: 0 !important; */
    color: #212529 !important;
    border-color: #ced4da !important;
    box-shadow: none !important;
}
</style>