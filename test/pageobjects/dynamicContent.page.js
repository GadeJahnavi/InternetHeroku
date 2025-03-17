import { $$ } from '@wdio/globals'
import Page from './page.js';


class DynamicContentPage extends Page {

    get rows() {
        return $$('div.row');
    }

    async getRowsText() {
        const rows = await this.rows;
        const rowsText = [];
        for (let row of rows) {
            rowsText.push(await row.getText());
        }
        return rowsText;
    }

    open () {
        return super.open('dynamic_content');
    }
}

export default new DynamicContentPage();
