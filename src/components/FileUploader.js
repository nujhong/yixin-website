import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import styled from 'react-emotion'
import MdLinkedCamera from 'react-icons/lib/md/linked-camera'

const StyledDropzone = styled(Dropzone)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 128px;
	height: 128px;
	margin: 5px;
	border-width: 1px;
	border-style: dashed;
	border-radius: 5px;
`

const Thumbnail = styled(`figure`)`
	display: inline-flex;
	margin: 5px;
	border-width: 1px;
	border-style: transparent;
	& > img {
		object-fit: cover;
	}
`
const ThumbnailWrapper = styled(`div`)`
	display: flex;
	flex-flow: row wrap;
`
const DeleteButton = styled(`button`)`
	position: absolute;
	top: 5px;
	right: 5px;
`

const FileUploader = ({ files, handleDrop, handleDelete }) => (
	<ThumbnailWrapper>
		<StyledDropzone multiple accept="image/*" onDrop={handleDrop}>
			<MdLinkedCamera size={36} />
			<p>拍摄/上传图片</p>
		</StyledDropzone>
		{files &&
			files.map(({ preview, name }, index) => (
				<Thumbnail className="image is-128x128" key={name}>
					<img src={preview} />
					<DeleteButton
						className="delete is-small"
						onClick={e => handleDelete(index, e)}
					/>
				</Thumbnail>
			))}
	</ThumbnailWrapper>
)

export default FileUploader
