/* eslint-disable no-unused-expressions */
import {fixture, assert} from "@open-wc/testing";

import "../lit-testing.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<lit-testing></lit-testing>");
    assert.strictEqual(_element.mails.length, 0);
    _element.mails = [
      {
        subject: 'Adquisicion de Iphone 11',
        from: 'hola@sellfonemx.com'
      },
      {
        subject: 'Rechazo de API OpenPay',
        from: 'soporte@openpay.com'
      },
      {
        subject: "Curso Polymer",
        from: "Ironbit"
      },
      {
        subject: 'Katas',
        from: 'Centraal'
      },
      {
        subject: 'Ganaste la loteria!',
        from: 'winner@notscam.com'
      },
      {
        subject: 'Tu pedido esta listo...',
        from: 'namazon@realzone.com'
      }];
    await _element.updateComplete;
    assert.strictEqual(_element.mails.length, 6);
    assert.strictEqual(_element.visibleMails.length, 0);

    const event = {
      currentTarget: {
        value: 'k'
      }
    };

    _element._onInput(event);
    await _element.updateComplete;
    assert.strictEqual(_element.visibleMails.length, 1);
    assert.deepEqual(_element.visibleMails[0], {
      subject: 'Katas',
      from: 'Centraal'
    });
  });

  it("Case remove mail", async () => {
    const _element = await fixture("<lit-testing></lit-testing>");
    assert.strictEqual(_element.mails.length, 0);
    _element.mails = [
      {
        subject: 'Adquisicion de Iphone 11',
        from: 'hola@sellfonemx.com'
      },
      {
        subject: 'Rechazo de API OpenPay',
        from: 'soporte@openpay.com'
      }];
    await _element.updateComplete;
    assert.strictEqual(_element.mails.length, 2);
    assert.strictEqual(_element.visibleMails.length, 0);

    const event = {
      currentTarget: {
        index: 1
      }
    };

    const mailToRemove = _element.mails[1];

    _element._removeMail(event);
    await _element.updateComplete;
    assert.strictEqual(_element.mails.length, 1);
    const mailsNotRemoved = _element.mails.filter(mail => mail.subject === mailToRemove.subject);
    assert.strictEqual(mailsNotRemoved.length, 0);
  });
});
