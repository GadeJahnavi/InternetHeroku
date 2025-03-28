import { expect } from '@wdio/globals'
import DynamicControlsPage from '../pageobjects/dynamicControls.page.js'


describe('Dynamic Controls', () => {
    it('should enable/disable the inputField', async () => {
        
        await DynamicControlsPage.open();

        await DynamicControlsPage.enableInput();

        const messageText = await DynamicControlsPage.getMessageText();
        expect(messageText).toContain("It's enabled!");

        await DynamicControlsPage.disableButton

        await DynamicControlsPage.disableInput();
        
        const displayMessage = await DynamicControlsPage.getMessageText();
        expect(displayMessage).toContain("It's disabled!");
    })      
})

