export default {
    theme: ({commit},payload)=>{
        commit('theme',payload);
    },
    lang: ({commit},payload)=>{
        commit('lang',payload);
    },
    changeView: ({commit},payload)=>{
        commit('changeView',payload);
    },
    changeMobile: ({commit},payload)=>{
        commit('changeMobile',payload);
    },
    ActiveCode: ({commit},payload)=>{
        commit('ActiveCode',payload);
    },
    token: ({commit},payload)=>{
        commit('token',payload);
    },
    chat_selectPart: ({commit},payload)=>{
        commit('chat_selectPart',payload);
    },
    socket: ({commit},payload)=>{
        commit('socket',payload);
    },
    socketInfo: ({commit},payload)=>{
        commit('socketInfo',payload);
    },
    handleSocket: ({commit},payload)=>{
        commit('handleSocket',payload);
    },
    handleRestful: ({commit},payload)=>{
        commit('handleRestful',payload);
    },
    privateChatID: ({commit},payload)=>{
        commit('privateChatID',payload);
    },
    messageCache: ({commit},payload)=>{
        commit('messageCache',payload);
    },
    generateKeyMessageSocket: ({commit},payload)=>{
        commit('generateKeyMessageSocket',payload);
    },
    ListConversation: ({commit},payload)=>{
        commit('ListConversation',payload);
    },
    infoCurrentUser: ({commit},payload)=>{
        commit('infoCurrentUser',payload);
    },
    conversationScroll: ({commit},payload)=>{
        commit('conversationScroll',payload);
    },
    conversationScrollRefresh: ({commit},payload)=>{
        commit('conversationScrollRefresh',payload);
    }
    /*
    changeIndexView: ({commit},payload)=>{
        commit('changeIndexView',payload);
    },
    statusBody: ({commit},payload)=>{
        commit('changeStatusBody',payload);
    },
    changeCall: ({commit},payload)=>{
        commit('call',payload);
    },
    setQuestion: ({commit},payload)=>{
        commit('setQuestion',payload);
    },
    setInfo: ({commit},payload)=>{
        commit('setInfo',payload);
    },
    tempNormalWeight: ({commit},payload)=>{
        commit('tempNormalWeight',payload);
    }*/
}
