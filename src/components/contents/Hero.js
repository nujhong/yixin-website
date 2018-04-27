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

const HeroSection = () => (
	<Hero className="hero is-medium">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="block">
					<h1 className="title is-1 is-spaced">专业建筑装修团队</h1>
					<p className="subtitle">
						我们为您解决澳洲收费昂贵，语言沟通困难，各种疑难的问题。欢迎免费咨询
					</p>
				</div>
				<div className="block">
					<Buttons className="buttons">
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
					</Buttons>
				</div>
			</div>
		</div>
	</Hero>
)

const Buttons = styled.div`
	display: flex;
	justify-content: center;
`

const Hero = styled.div`
	background: url('https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
		center center no-repeat;
	background-size: cover;
`

export default HeroSection
