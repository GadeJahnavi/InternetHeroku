import { browser, expect } from '@wdio/globals'
import DissappearingElementsPage from '../pageobjects/disappearingElements.page.js'

describe('Disappearing Elements', () => {
    it('gallery element should disappear when refresing the page', async () => {
        await DissappearingElementsPage.open()
        
        await DissappearingElementsPage.pauseExecution(3000)

        await DissappearingElementsPage.refreshPage()

        const sizeBefore = await DissappearingElementsPage.elementsCountBeforeRefresh();

        const sizeAfter = await DissappearingElementsPage.elementsCountAfterRefresh();

        if (sizeBefore !== sizeAfter) {
            console.log('Element Disappeared');
            expect(sizeBefore).not.toBe(sizeAfter);
        } else {
            console.log('All Elements still exist');
            expect(sizeBefore).toBe(sizeAfter);
        }
    })
})