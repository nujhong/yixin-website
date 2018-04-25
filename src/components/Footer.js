import React from 'react'
import {
	Footer,
	Container,
	Content,
	Columns,
	Column,
	Icon,
	Title,
} from 'bloomer'

const WrappedFooter = () => (
	<Footer id="footer">
		<Container>
			<Content isSize="small">
				<Columns>
					<Column isSize="1/3" isOffset={8}>
						<Title isSize="5">联系我们</Title>
						<p>0478 706 793</p>
						<p>ABN</p>
					</Column>
				</Columns>
			</Content>
			<a
				className="is-invisible"
				href="https://www.freepik.com/free-vector/workers-in-uniform_1311330.htm"
			>
				Designed by Freepik
			</a>
		</Container>
	</Footer>
)

export default WrappedFooter
