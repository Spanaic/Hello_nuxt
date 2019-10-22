<template>
<div>searchForm</div>
</template>

<script lang="babel">
export default {
    data() {
        return {
            // 検索フォーム
            searchForm: {
                keyword: ''
            },
            // バリデーションルール
            rules: {
                keyword: [
                    // 未入力はエラー
                    { required: true, message: 'Please input the keyword', trigger: 'blur'},
                    // 空白のみの入力はエラー
                    { whitespace: true, message: 'Please input the keyword', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        search(form) {
            this.$refs[form].validate((valid) =>{
                if (!valid) {
                    return false
                }
                // validationに引っ掛かるかどうかを条件分岐してる
                this.sendRequest()
                // validationに引っかからなければsendRequest()関数を実行する
            })
        },
        sendRequest () {
            this.$store.dispatch('getItems', {
                keyword: this.searchForm.keyword
            })
            // actionに設定したaxiosの関数をこのコンポーネント内で呼び出す記述
        }
    }
}
</script>

<style>
    .el-form {
        margin-top: 1em;
        margin-left: 1em;
    }
</style>