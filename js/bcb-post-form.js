/* eslint-disable require-jsdoc */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {Styles} from './bcb-post-form-css.js';
import './bcb-process-image';

export class BcbPostForm extends LitElement {
  static get properties() {
    return {
      error: String,
      text: {
        type: String,
        attribute: true,
        reflected: true,
      },
      title: {
        type: String,
        attribute: true,
        reflected: true,
      },
      image: {
        type: String,
        attribute: true,
        reflected: true,
      },
    };
  }

  constructor() {
    super();
    this.socket = io.connect( 'localhost:5000/' );
    this.text = '';
    this.title = '';
    this.image = '/img/noImageSelected.jpg';
  }

  render() {
    return html`
${Styles}
<div class="wrapper" >

        <div id="post-textarea">
          <div>${this.error}</div>

          <input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="Post Title"
          @change="${(e)=>this.title=e.path[0].value}" />
          <textarea
          name="postText"
          id="postText"
          placeholder="What's going on?"
          style="height: 75px; width: 95%; margin: 5px 7px;"
           @change="${(e)=>this.text = e.path[0].value}"></textarea>
          <!--Add Image-->
        </div>
        <bcb-process-image
        @bcbprocessimage="${(e)=>this.imageLoaded(e)}" >>
        </bcb-process-image>

        <button @click="${(e)=>this.submitForm(e)}">submit</button>
        <button @click="${(e)=>this.cancelForm(e)}">cancel</button>
      </div>
    `;
  }

  imageLoaded(e) {
    console.log(e);
    this.image = e.detail.image;
  }
  submitForm(e) {
    if (this.title===''
      || this.text==='') {
      this.error = 'text or title fields Empty';
      return;
    }
    this.error=undefined;
    const responseObject = {
      text: this.text,
      title: this.title,
      image: this.image,
    };
    this.socket.emit('newPost', responseObject);
    this.text = '';
    this.title = '';
    this.image = '';
    this.shadowRoot.querySelector('#postTitle').value = '';
    this.shadowRoot.querySelector('#postText').value = '';
    this.shadowRoot.querySelector('bcb-process-image')
        .setAttribute('image', '');
    this.shadowRoot.querySelector('bcb-process-image')
        .setAttribute('image', '/img/noImageSelected.jpg');
  }
}

customElements.define('bcb-post-form', BcbPostForm);
