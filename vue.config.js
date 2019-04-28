module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
		host: "localhost",
		port: 8092, // 端口号
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/ 
    hotOnly: true, // 热更新
    proxy: 'http://localhost:20026',
    // proxy: { //配置自动启动浏览器
		// 	"/api": {
		// 		target: "http://localhost:20026",
		// 		changeOrigin: true,
		// 		secure: false
		// 	},
		// }
  }
}