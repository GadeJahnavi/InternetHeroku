import {expect } from '@wdio/globals'
import CheckboxesPage from '../pageobjects/checkboxes.page.js'

describe('Checkboxes', () => {
    it('should check checkbox1', async () => {
        await CheckboxesPage.open()

        await CheckboxesPage.pauseExecution(3000)

        await CheckboxesPage.clickFirstCheckBox()

        await CheckboxesPage.clickSecondCheckBox()

        await CheckboxesPage.pauseExecution(3000)

        await expect(CheckboxesPage.firstCheckbox).toBeChecked()
        await expect(CheckboxesPage.secondCheckbox).not.toBeChecked()

    })
})
