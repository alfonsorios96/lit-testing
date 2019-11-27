import {html, LitElement} from 'lit-element';
import style from './lit-testing-styles.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class LitTesting extends LitElement {
  static get properties() {
    return {
      mails: {type: Array},
      visibleMails: {type: Array}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.mails = [];
    this.visibleMails = [...this.mails];
  }

  render() {
    return html`
        <div class="container">
            <div class="header">
                <paper-input label="Buscar Correo, pesona, asunto..." @input="${this._onInput}"></paper-input>
            </div>
            <div class="body">
            <paper-listbox>
            ${
      this.visibleMails.map(mail => html`
                  <paper-item>${mail.subject} : ${mail.from}</paper-item>
                `)
    }
</paper-listbox>
</div>
            <div class="footer"></div>
        </div>
      `;
  }

  _onInput(event) {
    const filterText = event.currentTarget.value;

    if (filterText !== '') {
      const mailDummy = this.mails[0];

      const keys = Object.keys(mailDummy);

      this.visibleMails = this.mails.filter(
        mail => keys.reduce((accumulator, key) => accumulator || (mail[key]).toLowerCase().includes(filterText.toLowerCase()), false)
      );
    } else {
      this.visibleMails = [...this.mails];
    }
  }

  _removeMail(event) {
    const index = event.currentTarget.index;
    this.mails.splice(index, 1);
    this.mails = [...this.mails];
  }
}

window.customElements.define("lit-testing", LitTesting);
