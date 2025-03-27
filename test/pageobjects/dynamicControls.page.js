import { $ } from '@wdio/globals'
import Page from './page.js';


class DynamicControlsPage extends Page {

    get checkbox() {
        return $('#checkbox > input');
    }

    get removeButton() {
        return $('//button[text()="Remove"]');
    }

    get addButton() {
        return $('//button[text()="Add"]');
    }

    get inputFeild() {
        return $('#input-example')
    }

    get enableButton() {
        return $('//button[text()="Enable"]');
    }

    get disableButton() {
        return $('//button[text()="Disable"]');
    }

    get displayedMessage() {
        return $('#message');
    }

    

    async enableInput() {
        await this.enableButton.click();
    }

    async disableInput() {
        await this.disableButton.click();
    }

    async isCheckboxEnabled() {
        return await this.checkbox.isEnabled();
    }

    async isInputFieldEnabled() {
        return await this.inputFeild.isEnabled();
    }

    async getMessageText() {
        return await this.displayedMessage.getText();
    }

    open() {
        return super.open('dynamic_controls');
    }
}

export default new DynamicControlsPage();
