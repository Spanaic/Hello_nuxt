<template>
    <div>
        <!-- 検索結果が0件だった場合 -->
        <template v-if="lists.length === 0 && !isLoading">
            <i class="el-icon-warning">&nbsp;No results found for your keyword.</i>
        </template>
        <!-- 検索結果一覧 -->
        <template v-else>
            <el-col :span="6" v-vor="(element, index) in lists" :key="index" class="col-style">
                <el-card :body-style=" { padding: '15px' }" class="box-card">
                    <div slot="header">
                        <!-- v-slotというディレクティブが作られている。コンポーネント間だとデータの受け渡しに一工夫必要な可能性あり -->
                        <a :href="element.url" target="_blank"> {{ element.title }} </a>
                    </div>
                    <div class="bottom content-style text">
                        <!-- 作成日 -->
                        <!-- <div> {{ element.created_at }} </div> -->
                        <div> {{ element.created_at | formatDate }} </div>
                        <!-- {{ value | filter名 }} -->
                        <!-- マスタッシュ内でfilterを記述する -->
                        <span>
                            <img :src="element.user.profile_image_url" width="15" height="15" />
                            <!-- 自己紹介があればPopoverで表示 -->
                            <template v-if="element.user.description">
                            <el-popover slot="description" placement="top-start" width="300" trigger="hover" :content="element.user.description">
                                <!-- popoverの表示位置を決めるオプションがplacment="" -->
                                <!-- ユーザ名 -->
                                <span slot="reference">&nbsp; {{ element.user.id }} </span>
                            </el-popover>
                            </template>
                            <template v-else>
                                <!-- ユーザ名 -->
                                <span>&nbsp; {{ element.user.id }} </span>
                            </template>
                        </span>
                        <span>
                            <i class="el-icon-star-off"> {{ element.likes_count }} </i>
                        </span>
                        <!-- <div> {{ element.body }} </div> -->
                        <div> {{ element.body | description }} </div>
                        <!-- タグ -->
                        <el-tag size="mini" type="info" class="tab-style" v-for="(tag, index) in tags" :key="index"> {{ tag.name }} </el-tag>
                    </div>
                </el-card>
            </el-col>
            <div v-if="250 < scrollY" class="page-component-up">
                <toransition name="fade">
                    <i class="celicon-caret-top" @click="scrollTop" />
                </toransition>
            </div>
        </template>
    </div>
</template>

<script lang="babel">
import {mapState}  from 'vuex'

export default {
    data() {
        return {
            scrollY: 0
            // スクロールY軸の初期値を:0に設定
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
        // methods内で定義したhandleScrollを呼び出している
    },
    computed: mapState(['lists', 'isLoading']),
    // mapStateを一行で定義している。
    // importしてるけど,現時点でstate.jsに記述がないのはなんで？
    methods: {
        handleScroll: function () {
            this.scrollY = window.scrollY
        },
        scrollTop: function() {
            document.body.scrollTop = 0
            // documentはどこの値?
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style>
    .content-style {
        line-height: 30px;
        font-size: 14px;
    }
    .tab-style {
        margin-right: 5px;
    }
    .box-card {
        height: 360px;
        font-size: 15px;
    }
    .col-style {
        padding: 10px;
    }
    .page-component-up {
        background-color: #59bb0c;
        position: fixed;
        right: 80px;
        bottom: 80px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0 0 6px rgba(0,0,0,0.12);
    }
    .page-component-up i {
        color: #fff;
        display: block;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
    }

    a:link,
    a:visited {
        color: #59bb0c;
    }

    a.hover {
        color: #3b8070;
    }
</style>