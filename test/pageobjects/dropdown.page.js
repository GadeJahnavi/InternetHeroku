import { $ } from '@wdio/globals'
import Page from './page.js';


class DropdownPage extends Page {

    get dropdown() {
        return $('#dropdown');
    }
    get firstOption() {
        return $('//option[text()="Option 1"]');
    }

    async clickDropdown() {
        await this.dropdown.click(); 
    }

    async selectFirstOption() {
        await this.clickDropdown();
        await this.firstOption.click();
        await this.dropdown.waitForDisplayed();
    }

    async getSelectedOptionValue() {
        return await this.dropdown.getValue(); 
    }

    open() {
        return super.open('dropdown');
    }
}

export default new DropdownPage();
