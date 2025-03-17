import { expect } from '@wdio/globals'
import DynamicControlsPage from '../pageobjects/dynamicControls.page.js'


describe('Dynamic Controls', () => {
    it('should enable the inputField', async () => {
        
        await DynamicControlsPage.open();

        await DynamicControlsPage.enableCheckbox();

        const messageText = await DynamicControlsPage.getMessageText();
        expect(messageText).toContain("It's enabled!");

        expect(DynamicControlsPage.isInputFieldEnabled()).toBe(true);

    })


    it('should disable the inputField', async () => {
        
        await DynamicControlsPage.open();

        await DynamicControlsPage.disableCheckbox();

        const messageText = await DynamicControlsPage.getMessageText();
        expect(messageText).toContain("It's disabled!");


        isEnabled = await DynamicControlsPage.isInputFieldEnabled();
        expect(isEnabled).toBe(false);

    })   
    
})

