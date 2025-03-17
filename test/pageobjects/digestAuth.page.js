import { $, browser } from '@wdio/globals'
import Page from './page.js';

class DigestAuthPage {

    get authMessage() {
        return $('p');
    }

    async open() {
        await browser.url('https://admin:admin@the-internet.herokuapp.com/digest_auth');
    }

    async getAuthMessage() {
        return await this.authMessage.getText();
    }
}
export default new DigestAuthPage();