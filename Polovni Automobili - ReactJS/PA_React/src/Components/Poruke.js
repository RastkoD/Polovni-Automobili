import React, { Component } from 'react';
import msgData from '../Data/poruke.json';
import '../Styles/Poruke.css';

class Poruke extends Component {
  state = {
    msg: msgData
  };
  render() {
    let messages = this.state.msg.map((msg, index) => (
      <div className='message'>
        <div className='read_msg'>
          <a href='#self'>
            <img src={msg.image_url} alt='' />
          </a>
          <div className='message_text'>
            <h6 className='title'>{msg.title}</h6>
            <div className='meta'>{msg.date_time}</div>
            <div className='body'>{msg.message}</div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className='col-lg-9 col-md-9 col-sm-9 content'>
          <h5>Poruke</h5>
          <br />
          <div className='msg_buttons'>
            <a className='delete' href='#self'>
              <i className='fas fa-trash-alt' /> Obriši (7)
            </a>
            <a className='block' href='#self'>
              <i className='fas fa-ban' /> Blokiraj
            </a>
          </div>
          <br />
          <br />
          <br />
          {messages}
        </div>
      </div>
    );
  }
}

export default Poruke;
