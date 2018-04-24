import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import { Image } from 'bloomer';

const FileUploader = ({files, handleDrop}) => (
  <ThumbnailWrapper>
    <StyledDropzone
      multiple
      accept="image/*"
      onDrop={handleDrop}>
      {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
        if (isDragActive) {
          return "This file is authorized";
        }
        if (isDragReject) {
          return "This file is not authorized";
        }
      }}
    </StyledDropzone>
    {files.map(file => <Thumbnail isSize='128x128' src={file.preview}/>)}
  </ThumbnailWrapper>
)

export default FileUploader

const StyledDropzone = styled(Dropzone)`
  width: 128px;
  height: 128px;
  margin: 1px;
  @media (min-width: 769px) {
    margin: 5px;
  }
  border-width: 1px;
  border-color: rgb(102, 102, 102);
  border-style: dashed;
  border-radius: 5px;
`

const Thumbnail = styled(Image)`
  display: inline-flex;
  margin: 1px;
  @media (min-width: 769px) {
    margin: 5px;
  }
`
const ThumbnailWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1px;
  @media (min-width: 769px) {
    padding: 5px;
  }
`
