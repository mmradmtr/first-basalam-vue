export default {
    /*
    * default
    * darkmode
    * */
    theme: 'default',
    lang: 'fa',
    mobile: '9127488935',
    countryCode: '98',
    currentView: 0,
    activeCode: '',
    // token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtb2JpbGUiOiIwOTEyNzQ4ODkzNSJ9.ebHNwYkWFqph322tpcQ7ExW1YcmRNxkSeLEgvdHodaB9nqqwB2LLtye6ucnJmHcIRKdff73FwqFG0jVcIk7Zhg',
    // token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtb2JpbGUiOiIwOTE5ODUwNzg5NyIsInRpbWUiOiIyMDIxLTAxLTI0IDE1OjIwOjM4LjkwNjg4NCJ9.1TA8sAbCCKxmcY3TeWpO3G9JlveI2dJtfBReT0mzWqNfwu4ypJIMIVB8WfNfeIAEH9ClSoiRGMH7ufzJI--5yA',
    token: null,
    infoCurrentUser: {
        id: null
    },
    page: {
        chat: {
            // [default] listConversation --- bioGroup --- bioPv --- conversation
            selectPart: 'listConversation'
        }
    },
    ListConversation: [],
    SOCKET: null,
    HANDLE_SOCKET: null,
    HANDLE_RESTFUL:null,
    // 0 => try connection     -1 => not Connection    1 => connection
    CONNECTION: 0,
    LAST_TRY_CONNECTION_SECOND: 2,
    //recipient === id user face to face
    //save group id ---> recipient => groupID
    privateChatID: {},
    messageCache: {},
    generateKeyMessageSocket: 0,

    //chat scroll
    conversationScroll_offsetHeight: null,
    conversationScroll_scrollTop: null,
    refreshScrollBar: 0
}