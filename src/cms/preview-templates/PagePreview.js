import React from 'react'
import Hero from '../../components/contents/Hero'

const PagePreview = ({ entry }) => {
	const frontmatter = {
		tagline: entry.getIn(['data', 'tagline']),
		value_proposition: entry.getIn(['data', 'value_proposition']),
	}
	return <Hero frontmatter={frontmatter} />
}

export default PagePreview
