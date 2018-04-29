import React from 'react'
import Helmet from 'react-helmet'

import './all.sass'

if (typeof window !== 'undefined') {
	require('smooth-scroll')('a[href*="#"]')
}

export default ({
	children,
	data: {
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<div>
		<Helmet title={title}>
			<html lang="zh" amp />
		</Helmet>
		<div>{children()}</div>
	</div>
)

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
