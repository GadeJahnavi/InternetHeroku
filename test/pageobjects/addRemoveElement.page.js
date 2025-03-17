import { $ } from '@wdio/globals'
import Page from './page.js';

class AddRemoveElementsPage extends Page {

    get addBtn() {
        return $('button[onclick="addElement()"]');
    }
    get deleteBtn() {
        return $('button[onclick="deleteElement()"]');
    }

    async addElement() {
        await this.addBtn.click();
    }

    async removeElement() {
        await this.addBtn.click();
        await this.deleteBtn.waitForDisplayed();
        await this.deleteBtn.click();
    }

    
    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemoveElementsPage();
