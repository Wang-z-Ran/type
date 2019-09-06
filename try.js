const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path')

//首先暴露一个对象
module.exports = {
	//1.入口文件
	entry:{
		main:'./src/main.js',
	},
	//2.打包模式
	mode:'development',
	//3.输出
	output:{
		filename:'[name].js' ,//输出的名字  
		path:path.resolve(__dirname,'./dist'),//输出的文件夹名字
		publicPath:'/' //代理路径  静态资源加载
	},
	//4.热更新
	devServer:{
		contentBase:'dist' ,//默认的文件
		overlay:true ,//报错警示显示到浏览器
		host:'192,168,43,62',// 电脑的ip 手机可以真机实测
	},
	module:{
		//配置各种loader
		
		rules:[
			//css
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
				]
			},
			//html
			{
				test:/\.html$/,
				use:[
					{loader:'file-loader',options:{name:'[name].html'}},
					{loader:'extract-loader'},
					{loader:'html-loader'},
				]
			},
			//图片
			{
				test:/\.(gif|jpg|png)$/,
				use:[
					{loader:'file-loader',options:{name:'[name].[ext]'}},
				]
			},
			{
				test:/\.vue$/,
				loader:'vue-loader',
			}
		]
	},
	//确保vue的使用
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.js'
		}
	},
	plugins:[
		new VueLoaderPlugin()
	]
}
