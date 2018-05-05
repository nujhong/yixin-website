module.exports = {
	siteMetadata: {
		title: '易信 | 墨尔本建筑装修',
		content:
			'承接墨尔本各种室内外大小装修工程，油漆瓷砖地板墙身安装修补，网上极速报价，专业团队提供实惠可靠，值得信赖的服务',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/data`,
				name: 'data',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
	],
}
