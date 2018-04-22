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
      <div className="file is-boxed is-primary">
        <label className="file-label">
            <span className="file-cta">
              <Dropzone
                multiple
                accept="image/*"
                style={{position: 'relative'}}
                onDrop={this.onDrop.bind(this)}>
                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                  if (isDragActive) {
                    return "This file is authorized";
                  }
                  if (isDragReject) {
                    return "This file is not authorized";
                  }
                }}
              </Dropzone>
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
                Choose a file…
              </span>
            </span>

        </label>
      </div>
    )
  }
}

export default FileUploader
