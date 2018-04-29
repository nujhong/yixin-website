module.exports = {
	siteMetadata: {
		title: '易信 | 墨尔本建筑装修',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		'gatsby-plugin-sass',
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
		// {
		// 	resolve: 'gatsby-source-filesystem',
		// 	options: {
		// 		path: `${__dirname}/static/img`,
		// 		name: 'uploads',
		// 	},
		// },
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// // gatsby-remark-relative-images must
					// // go before gatsby-remark-images
					// {
					// 	resolve: `gatsby-remark-relative-images`,
					// 	options: {
					// 		// Set the name option to the same
					// 		// name you set for gatsby-source-filesystem
					// 		name: 'uploads', // default
					// 	},
					// },
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					'gatsby-remark-copy-linked-files',
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
