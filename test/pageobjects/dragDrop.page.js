import { $, browser } from '@wdio/globals'
import Page from './page.js';

class DragAndDropPage extends Page {
    
    get elementA() {
        return $('#column-a');
    }

    get elementB() {
        return $('#column-b');
    }

    async dragAndDropElement() {
        const elementToDrag = this.elementA;
        const elementToDrop = this.elementB;
        await elementToDrag.dragAndDrop(elementToDrop);
    }

    open () {
        return super.open('drag_and_drop');
    }
}

export default new DragAndDropPage();

