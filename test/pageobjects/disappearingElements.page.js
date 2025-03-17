import { $, browser } from '@wdio/globals'
import Page from './page.js';

class DissappearingElementsPage extends Page {
    
    get elementsList() {
        return $('div > ul > li');
    }

    get elementsAfterRefresh() {
        return $('div > ul > li > a');
    }

    async elementsCountBeforeRefresh() {
        const elementList = this.elementsList;
        return elementList.length;
    }

    async elementsCountAfterRefresh() {
        const elementList = this.elementsAfterRefresh;
        return elementList.length;
    }
    
    open () {
        return super.open('disappearing_elements');
    }

}

export default new DissappearingElementsPage();