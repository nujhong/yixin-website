import React from 'react'
import styled from 'react-emotion'

const StyledFigure = props => {
	return props.isHoverable ? (
		<HoverableFigure className="image is-16by9 is-clipped" {...props}>
			<img src={props.src} alt={props.alt || ''} />
			{props.children && (
				<FigCaption className="is-overlay has-text-white">
					{props.children}
				</FigCaption>
			)}
		</HoverableFigure>
	) : (
		<Figure className="image is-4by3 is-clipped" {...props}>
			<img src={props.src} alt={props.alt || ''} />
			{props.children && (
				<FigCaption className="is-overlay has-text-white">
					{props.children}
				</FigCaption>
			)}
		</Figure>
	)
}

export default StyledFigure

const Figure = styled.figure`
	cursor: pointer;
`

const FigCaption = styled.figcaption`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
`

const HoverableFigure = styled(Figure)`
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
