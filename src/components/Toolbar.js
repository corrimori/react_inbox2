import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    const {
      selectedIndicator,
      isSelected,
      markedRead,
      markedUnread,
      unreadMessages,
      deleteMessage,
    } = this.props;
    console.log('unread========', unreadMessages);
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unreadMessages()}</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus" />
          </a>

          <button className="btn btn-default">
            <i
              onClick={isSelected}
              className={`fa fa${selectedIndicator()}-square-o`}
            />
          </button>

          <button onClick={markedRead} className="btn btn-default">
            Mark As Read
          </button>

          <button onClick={markedUnread} className="btn btn-default">
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button onClick={deleteMessage} className="btn btn-default">
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;

// className on select all check OR minus
// "fa fa-minus-square-o"
// "fa fa-check-square-o"
