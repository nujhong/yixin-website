import React from 'react'
import styled from 'react-emotion'

const FigCaption = styled('figcaption')`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	justify-content: center;
	background: ${({ opacity = 0.6 }) => `rgba(0, 0, 0, ${opacity})`};
`

const Figure = ({ className, src, alt, isActive, children, opacity }) => (
	<figure className={className}>
		<img src={src} alt={alt} />
		<FigCaption className="is-overlay has-text-white" opacity={opacity}>
			{children}
		</FigCaption>
	</figure>
)

export const HoverableFigure = styled(Figure)`
	cursor: pointer;
	& > img {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
		transform: scale(1);
		transition: 0.7s ease-in-out;
	}
	& > figcaption {
		background: transparent;
		transition: 0.3s ease-in-out;
		opacity: 0;
	}
	&:hover > img {
		transform: scale(1.2);
	}
	&:hover > figcaption {
		background: rgba(0, 0, 0, 0.6);
		opacity: 1;
	}
`

export default Figure
