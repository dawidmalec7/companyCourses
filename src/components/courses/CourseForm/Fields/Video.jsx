import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'

class Dropzone extends Component {
    state = {
      files: [],
    };

    handleChange = (dropzoneFiles) => {
      this.setState({
        files: dropzoneFiles,
      });
    }

    render() {
      return (
        <DropzoneArea
          onChange={(files) => this.handleChange(files)}
          acceptedFiles={['video/*']}
          dropzoneText="Drag and drop an Video file here or click"
          maxFileSize={10000000}
        />
      )
    }
}

export default Dropzone;
