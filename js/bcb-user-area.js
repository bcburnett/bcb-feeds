import {LitElement, html} from '@polymer/lit-element/lit-element.js'
import {Styles} from './bcb-user-area-css.js'

export class BcbUserArea extends LitElement {
  static get properties(){
    return {
      
    }
  }

  constructor(){
    super()

  }

  render(){
    return html`
	${Styles}
	<h1>bcb-user-area</h1>
    `
  }

}

customElements.define('bcb-user-area',BcbUserArea)
