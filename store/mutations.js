export default {
    setItems(state, lists) {
        state.lists = lists;
    },
    hideLoading(state) {
        state.isLoading = false;
    },
    // changeLoading(state, bool) {
    //     state.isLoading = false;
    // },
    showLoading(state) {
        state.isLoading = true;
    }
};

// stateの持つ変数に値をセットするSetter

// setItems("aaa", [])



// state = {
//     users: [],
//     isAuth: false,
//     isLoading: false
// }