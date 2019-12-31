module.exports = {
    chainWebpack: config => {
        // 压缩代码
        config.optimization.minimize(true);
        // 分割代码
        config.optimization.splitChunks({
                chunks: 'all'
            })
            // 用cdn方式引入
        config.externals({
            'vue': 'Vue', //这个必须有，element才能正常在cdn引用的时候注册到
            'element-ui': 'ELEMENT',
            'echarts': 'eachats'
        })
    }
}
