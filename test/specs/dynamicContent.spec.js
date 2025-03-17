import { expect } from '@wdio/globals'
import DynamicContentPage from '../pageobjects/dynamicContent.page.js'

describe('Dynamic contents', () => {
    it('should check if content is dynamic', async () => {

        await DynamicContentPage.open();

        const beforeRefresh = await DynamicContentPage.getRowsText();

        await DynamicContentPage.refreshPage();

        const afterRefresh = await DynamicContentPage.getRowsText();

        expect(beforeRefresh).not.toEqual(afterRefresh);
    })
})
