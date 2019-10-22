<template>
  <div class="header">
      <b><nuxt-link to="/">Hello Qiita with Nuxt.jsヾ(｡>﹏<｡)ﾉﾞ✧*。</nuxt-link></b>
  </div>
</template>

<style>
/* scopedが付くものと付かないものの違いとは？？？ */
.header {
    font-size: 20px;
    left: 0;
    top: 0;
    /* position: absoluteって勝手にされてるの？ */
    width: 100%;
    background-color: #59bb0c;
    color: #fff;
    text-align: left;
    padding: 15px;
}
.header a {
    text-decoration: none;
}
.header a:link,
.header a:visited{
    color: #fff;
}
/* header内のaタグのlinkや訪れた後の文字カラーを指定出来る */
</style>