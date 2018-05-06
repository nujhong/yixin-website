import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'

const FigCaption = styled('figcaption')`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	justify-content: center;
	background: ${({ opacity = 0.6 }) => `rgba(0, 0, 0, ${opacity})`};
`

const Figure = ({
	className,
	src,
	sizes,
	resolutions,
	alt,
	isActive,
	children,
	opacity,
}) => {
	var Image
	if (sizes) {
		Image = <Img sizes={sizes} alt={alt} />
	} else if (resolutions) {
		Image = <Img resolutions={resolutions} alt={alt} />
	} else {
		Image = <img src={src} alt={alt} />
	}
	return (
		<figure className={className}>
			{Image}
			<FigCaption className="is-overlay has-text-white" opacity={opacity}>
				{children}
			</FigCaption>
		</figure>
	)
}

export const HoverableFigure = styled(Figure)`
	cursor: pointer;
	& > img {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
		transform: ${props => (props.isActive ? 'scale(1.2)' : 'scale(1)')};
		transition: 0.7s ease-in-out;
	}
	& > figcaption {
		transition: 0.3s ease-in-out;
		background: ${props =>
			props.isActive ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
		opacity: ${props => (props.isActive ? '1' : '0')};
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
