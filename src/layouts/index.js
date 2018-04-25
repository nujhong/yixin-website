import React from 'react'
import Helmet from 'react-helmet'

import './all.sass'

export default ({
	children,
	data: {
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<div>
		<Helmet title={title} />
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
