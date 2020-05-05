module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    css: {
        sourceMap: true,
        extract: true,
        loaderOptions: {
            scss: {
                data: `@import "~@/scss/all.scss";`
            }
        }
    }
}   
