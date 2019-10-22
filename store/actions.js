// QiitaのAPIを呼び出し,そのレスポンスをmutationsのcommitを使ってstateにセットする...
import axios from "axios";

const BASE_URL = "https://qiita.com/api/v2/";

export default {
    async getItems({ commit }, payload) {
        // 処理の流れがわからない
        commit("showLoading");
        const { data } = await axios
        .get(`${BASE_URL}items`, {
                // headers: {"Content-Type": "application/json"},
                // Content-Typeとは？configと関係性はある？
                params: {
                    page: 1,
                    per_page: 20,
                    query: payload.keyword
                    // クエリの値はどこから来ているの？
                }})
                // timeout: 15000
                // timeoutはなんのために置かれているの？
            // }

        .catch(error => {
            console.log(error);
            commit("hideLoading");
            this.$router.push("/error");
            // 上と一緒で処理の流れがわからない
            // $router.push("/error")とは、どういう意味なのか
        });
        commit("setItems", data);
        commit("hideLoading");
    }
}



// this.$store.dispatch("setItems", response.data);
// commit("hideLoading");