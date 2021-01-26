// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/Styles/_global.scss";`
            }
        }
    }
}
