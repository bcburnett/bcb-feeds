/* eslint-disable require-jsdoc */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {Styles} from './bcb-feed-css.js';

export class BcbFeed extends LitElement {
  static get properties() {
    return {
      posts: Array,
    };
  }


  constructor() {
    super();
    this.posts = [];
    this.socket = io.connect( 'localhost:5000/' );
    this.socket.on( 'newPost', ( e ) => {
      const data = e.data;
      console.log( data );
      const myhtml = html`
        <div style="
                width:500px;
                min-height:100px;
                border: 1px solid #000;
                padding-top:5px;
                margin:10px auto;
                border-radius:10px">
          <h2>
            ${data.poster } |
            ${data.postTitle }
          </h2>
          <textarea
          name="postText"
          id="postText"
          placeholder="What's going on?"
          >${data.postText }</textarea>
          <br />
          <center>
            <img
            src="${data.postImage }"
            id="${ data.post_id }"
            data-user="${ data.user_id }" />
          </center>
          <br /><br />
        </div>
      `;
      this.posts = [myhtml, ...this.posts];
    } );
    this.socket.on( 'del', ( data ) => {
      this.posts = [];
      this.socket.emit( 'loadPosts' );
    } );
    this.socket.emit( 'loadPosts' );
  }

  render() {
    return html`
  ${Styles }
  <div>
    ${this.posts }
  </div>
    `;
  }
}

customElements.define( 'bcb-feed', BcbFeed );
