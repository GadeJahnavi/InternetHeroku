import { expect } from '@wdio/globals'
import DropdownPage from '../pageobjects/dropdown.page.js'

describe('Dropdown list', () => {
    it('should select option1 from the dropdown', async () => {
        await DropdownPage.open()
        
        await DropdownPage.pauseExecution(3000)

        await DropdownPage.clickDropdown()

        await DropdownPage.selectFirstOption()

        const selectedOptionValue = await DropdownPage.getSelectedOptionValue();
        expect(selectedOptionValue).toBe('1');
    })
})