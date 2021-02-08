import store from "@/store/index";

export default {
    theme: (state, newval) => {
        state.theme = newval;
    },
    lang: (state, newval) => {
        state.lang = newval;
    },
    //change page and view
    /*
    * just object {page:some , view:some}
    * */
    changeView: (state, newval) => {
        state.currentView = newval
    },
    changeMobile: (state, newval) => {
        state.mobile = newval.mobile;
        state.countryCode = newval.country;
    },
    ActiveCode: (state, newval) => {
        state.activeCode = newval
    },
    flag: (state, newval) => {
        state.activeCode = newval
    },
    token: (state, newval) => {
        state.token = newval
    },
    chat_selectPart: (state, newval) => {
        state.page.chat.selectPart = newval
    },
    socket: (state, newval) => {
        state.SOCKET = newval
    },
    handleSocket: (state, newval) => {
        state.HANDLE_SOCKET = newval
    },
    handleRestful: (state, newval) => {
        state.HANDLE_RESTFUL = newval
    },
    generateKeyMessageSocket: (state, newval) => {
        state.generateKeyMessageSocket = newval
    },
    infoCurrentUser: (state, newval) => {
        state.infoCurrentUser.id = newval
    },
    privateChatID: (state, newval) => {
        state.privateChatID[newval.userID] = newval.groupID;
        if (state.messageCache[newval.groupID] === undefined) state.messageCache[newval.groupID] = []
    },
    ListConversation: (state, newval) => {
        // console.log(state.listConversation);
        state.ListConversation = state.ListConversation.concat(newval);
    },
    conversationScroll: (state, newval) => {
        state.conversationScroll_offsetHeight = newval.offsetHeight
        state.conversationScroll_scrollTop = newval.scrollTop
    },
    conversationScrollRefresh: (state,ne) => {
        state.refreshScrollBar = state.refreshScrollBar +ne;
    },

    messageCache: (state, newval) => {
        //----- all param need
        let type = newval.type //'hardChange,merge'
        let idChat = newval.idChat
        let addInDown = newval.addInDown // if type append
        // let msg = newval.msg

        ///---------
        if (state.messageCache[idChat] === undefined) state.messageCache[idChat] = []
        //----- mergeForConstantKey [constantKey]
        if (type === 'mergeForConstantKey') {
            for (let i = state.messageCache[idChat].length - 1; i > 0; i--) {
                console.log(store.state.messageCache[idChat][i].constantKey, newval.constantKey)
                if (store.state.messageCache[idChat][i].constantKey === newval.constantKey) {
                    store.state.messageCache[idChat][i] = Object.assign(state.messageCache[idChat][i], newval.msg)
                    break;
                }
            }

            // state.messageCache[idChat] = newval.msg;
        }
        //----- merge
        else if (type === 'merge') {
            //merge
            let merge = function (a, b, prop) {
                var reduced = a.filter(aitem => !b.find(bitem => aitem[prop] === bitem[prop]))
                return reduced.concat(b);
            }
            let res = merge(state.messageCache[idChat], newval.msg, 'id')
            //sort
            /*res.sort(function (a, b) {
                return a.id - b.id;
            });*/

            state.messageCache[idChat] = res
            // state.messageCache = Object.assign({},state.messageCache)

            //----- append  [addInDown]
        } else if (type === "append") {
            //addInDown
            //unshift add item in first
            //push last
            if (addInDown) {
                state.messageCache[idChat].push(newval.msg)
            } else {
                state.messageCache[idChat].unshift(newval.msg)
            }
        }

        state.messageCache = Object.assign({}, state.messageCache)
    },
    socketInfo: (state, newval) => {
        // Connection
        if (newval.CONNECTION != null) {
            //add time in try connection
            if (newval.CONNECTION === -1) {
                state.LAST_TRY_CONNECTION_SECOND += parseInt(state.LAST_TRY_CONNECTION_SECOND >= 60 ? 60 : process.env.VUE_APP_TRY_CONNECTION_TIME_SPACE);
            } else if (newval.CONNECTION === 1) {
                state.LAST_TRY_CONNECTION_SECOND = 0;
            }
            state.CONNECTION = newval.CONNECTION;//save final
        }

        //LAST TRY CONNECTION SECOND
        if (newval.LAST_TRY_CONNECTION_SECOND != null) state.LAST_TRY_CONNECTION_SECOND = newval.LAST_TRY_CONNECTION_SECOND;

    }
}
