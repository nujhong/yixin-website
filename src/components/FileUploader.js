import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class FileUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFiles: []
    }
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ imageFiles: [ ...this.state.imageFiles, reader.result ] })
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        reader.readAsDataURL(file)
    });
  }

  render() {
    return (
      <form>
        <Dropzone
          multiple
          accept="image/*"
          onDrop={this.onDrop.bind(this)}>
          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
              return "This file is authorized";
            }
            if (isDragReject) {
              return "This file is not authorized";
            }
            return acceptedFiles.length || rejectedFiles.length
              ?
              <div>{this.state.imageFiles.map((file) =>
                <figure style={{flex: '1'}} key={file}><img alt={file} src={file} /></figure>
              )}</div>
              : "Upload your image for a quote";
          }}
        </Dropzone>
      </form>
    )
  }
}

export default FileUploader
