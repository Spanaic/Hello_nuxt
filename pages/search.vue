<template>
    <div>
        <el-container>
            <el-main v-loading.fullscreen.lock="isLoading">
                <!-- v-loading = v-show="loading" のようなイメージで使用出来る -->
                <!-- fullscreen.lockとは何か？？ -->
                <search-form />
                <!-- 検索フォーム -->
                <!-- 検索フォームのコンポーネントを呼び出している -->
                <search-result />
                <!-- 検索結果一覧 -->
                <!-- 検索結果を表示するコンポーネントを呼び出している -->
            </el-main>
        </el-container>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import SearchResult from '~/components/SearchResult.vue';
import SearchForm from '~/components/SearchForm.vue';
// コンポーネントの呼び出し（import）

export default {
    layout: 'navbar',
    // layout:プロパティで,layout内のnavbar.vueを呼び出している?
    // importもしていないのにどうやって使うの？viewへの記述がないのに何に使っているの？
    // layoutプロパティってそもそも何？
    components: {
        SearchForm,
        SearchResult
    },
    computed: mapState(['isLoading']),
    // mapState(引数に配列としてstateの中のデータを記述する)
    // 全ての必要なステートを呼び出すことが出来る
    // computedに定義することで、値の変更を受け取って, view上に反映(bind)することが出来る
    fetch ({ store }) {
        store.dispatch('getItems', {
            keyword: 'nuxt.js'
            // dispatchで呼び出されたgetItemsに渡されている第2引数にオブジェクトとしてkeyword: 'nuxt.js'が渡されている？
        })
    }
}
</script>

<style>

.el-main {
    background-color: #fff;
}

</style>