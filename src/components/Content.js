import React from 'react'
import styled from 'react-emotion'

export const HTMLContent = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const StyledHTMLContent = styled(HTMLContent)`
	white-space: pre-line;
`

const Content = ({ content, className }) => (
	<div className={className}>{content}</div>
)

export default Content
