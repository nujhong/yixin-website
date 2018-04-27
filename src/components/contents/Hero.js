import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
	Columns,
	Column,
	Button,
	HeroHeader,
	HeroBody,
	Container,
	Title,
	Subtitle,
} from 'bloomer'
import Block from '../Block'
import Animation from '../Animation'
import styled from 'react-emotion'

const Hero = styled.div`
	background: url('https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
		center center no-repeat;
	background-size: cover;
`

const HeroSection = ({ frontmatter: { tagline, value_proposition } }) => (
	<Hero className="hero is-medium">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="block">
					<h1 className="title is-1 is-spaced">{tagline}</h1>
					<p className="subtitle">{value_proposition}</p>
				</div>
				<div className="hero-buttons">
					<Link
						to="/contact"
						className="button is-primary is-large is-radiusless"
					>
						<span className="is-size-6">网上报价</span>
					</Link>
					<a
						className="button is-primary is-inverted is-large is-radiusless"
						href="tel:+61-478-706-793"
					>
						<span className="is-size-6">呼叫 0478 706 793</span>
					</a>
				</div>
			</div>
		</div>
	</Hero>
)

export default HeroSection

export const query = graphql`
	fragment HeroFragment on MarkdownRemark {
		frontmatter {
			tagline
			value_proposition
		}
	}
`
