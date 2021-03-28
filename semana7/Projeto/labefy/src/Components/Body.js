import React from 'react'

export default class Body extends React.Component {
  
    render() {
      return (
        <div>
          <div>
            {this.props.content}
          </div>
        </div>
      )
    }
}