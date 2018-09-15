import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.event, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return(
      // <React.Fragment>
      //   <div>{console.log(props.event)}</div>
      // </React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr> 
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
      
    )
  }
}

const mapStateToProps = state => ({ event: state.event})
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)