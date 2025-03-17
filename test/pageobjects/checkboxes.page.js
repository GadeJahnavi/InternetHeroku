import { $, browser } from '@wdio/globals'
import Page from './page.js';

class CheckboxesPage extends Page {
    get firstCheckbox() {
        return $('#checkboxes > input:nth-child(1)')
    }

    get secondCheckbox() {
        return $('#checkboxes > input:last-child')
    }

    async clickFirstCheckBox() {
      await this.firstCheckbox.click();
    }
    
    async clickSecondCheckBox() {
        await this.secondCheckbox.click();
      }
  
    open() {
        return super.open('checkboxes');
    }
}
export default new CheckboxesPage();