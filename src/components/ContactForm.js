import React, { Component } from 'react';
import axios from 'axios';
import { navigateTo } from "gatsby-link"
import Animation from './Animation';
import FileUploader from './FileUploader';
import { Box, Modal, ModalBackground, ModalClose, ModalContent } from 'bloomer';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: `https://api.mailgun.net/v3/sandbox1e4e9ce593a6456caa30b15b70af4720.mailgun.org/messages`,
      auth: {
        username: 'api',
        password: 'key-7cdf51f1f9ca94998f0e437fcad44cae'
      },
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      params: {
        from: `Mailgun Sandbox <postmaster@sandbox1e4e9ce593a6456caa30b15b70af4720.mailgun.org>`,
        to: `Yixin <yixindecoration@gmail.com>`,
        subject: `Hello Yixin`,
        text: 'Congratulations Yixin, you just sent an email with Mailgun!  You are truly awesome!'
      }
    })
      .then((res) => {
        navigateTo('/success')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="field">
          <label class="label">名字</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>

        <label class="label">联系方式</label>
        <div class="field has-addons">
          <p class="control">
            <span class="select">
              <select>
                <option>电话号码</option>
                <option>邮箱</option>
              </select>
            </span>
          </p>
          <div class="control is-expanded">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div class="field">
          <label class="label">附件</label>
          <div class="control">
            <FileUploader />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary">提交</button>
          </div>
        </div>

      </form>
    )
  }
}

export default ContactForm
