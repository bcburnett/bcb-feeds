/* eslint-disable require-jsdoc */
import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
import { Styles } from './bcb-video-css.js';
export class BcbVideo extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.socket = io.connect('localhost:5000/');
    this.socket.on('stream', image => {
      this.shadowRoot.querySelector('#play').setAttribute('src', image);
    });
  }

  render() {
    return html`
  ${Styles}
  <h3>bcb-video</h3>
  <h4>preview</h4>
  <video
  src=""
  id="video"
  style="max-width:200px; max-height: 150px;"
  autoplay="true"></video>
  <h4>Reflected</h4>
  <img id="play">
  <button
  @click="${e => this.setup()}"
  >start</button>
    `;
  }

  setup() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 150;
    context.width = canvas.width;
    context.height = canvas.height;
    const video = this.shadowRoot.getElementById('video');

    function loadCamera(stream) {
      video.srcObject = stream;
    }

    function loadFail() {
      socket.emit('hello', 'cannot load camera');
    }

    const viewVideo = async (video, context) => {
      Promise.resolve().then(e => {
        context.drawImage(video, 0, 0, context.width, context.height);
        this.socket.emit('stream', canvas.toDataURL('image/webp'));
      });
    };

    function startStream(control) {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia({
          video: true,
          audio: false
        }, loadCamera, loadFail);
      }

      setInterval(function () {
        viewVideo(video, context);
      }, 50);
    }

    ;
    startStream();
  }

}
customElements.define('bcb-video', BcbVideo);