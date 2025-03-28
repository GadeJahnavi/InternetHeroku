import {browser, expect } from '@wdio/globals'
import AddRemoveElementsPage from '../pageobjects/addRemoveElement.page.js'

describe('Remove Element', () => {
    it('should remove element', async () => {
        await AddRemoveElementsPage.open()

        await AddRemoveElementsPage.removeElement()
        
        await AddRemoveElementsPage.pauseExecution(3000)

        await expect(AddRemoveElementsPage.deleteBtn).toBeExisting()
    })
})

