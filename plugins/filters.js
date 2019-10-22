import Vue from "vue";
import dayjs from "dayjs";

Vue.filter('formatDate', function (value) {
    // 第一引数でフィルター名を定義、関数にif文を定義(value)returnで変換を記述する
    if (value) {
        return dayjs().format('YYYY/MM/DD hh:mm')
    }
})

Vue.filter("description", function(value) {
    if (value) {
        return value.slice(0,100) + "..."
        // 100文字までスライスして表示、100文字以降は...のカスタムフィルターかな？
    }
})