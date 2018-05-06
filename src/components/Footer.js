import React from 'react'
import { StyledHTMLContent } from './Content'
import styled from 'react-emotion'

const HiddenCredit = styled('div')`
	display: none;
`

export default ({ frontmatter: { ContactUs } }) => (
	<div className="footer" id="footer">
		<div className="container">
			<div className="content is-small">
				<div className="columns">
					<div className="column is-one-third is-offset-8">
						<div className="title is-5">联系我们</div>
						<StyledHTMLContent content={ContactUs} />
					</div>
				</div>
			</div>
			<HiddenCredit>
				<a href="https://www.freepik.com/free-vector/workers-in-uniform_1311330.htm">
					Designed by Freepik
				</a>
			</HiddenCredit>
		</div>
	</div>
)

export const query = graphql`
	fragment FooterFragment on MarkdownRemark {
		frontmatter {
			ContactUs
		}
	}
`
