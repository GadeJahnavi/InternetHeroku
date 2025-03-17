import {expect } from '@wdio/globals'
import AddRemoveElementsPage from '../pageobjects/addRemoveElement.page.js'

describe('Add Element', () => {
    it('should add element', async () => {
        await AddRemoveElementsPage.open()

        await AddRemoveElementsPage.addElement()

        await expect(AddRemoveElementsPage.deleteBtn).toBeExisting()

        await expect(AddRemoveElementsPage.deleteBtn).toHaveText(
            expect.stringContaining('Delete'))
    })
})
