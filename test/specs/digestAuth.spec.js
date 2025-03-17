import { browser, expect } from '@wdio/globals'
import DigestAuthPage from '../pageobjects/digestAuth.page.js'

describe('Digest Auth', () => {
    it('should authenticate successfully with given credentials', async () => {
        await DigestAuthPage.open();

        const authMessage = await DigestAuthPage.getAuthMessage();

        expect(authMessage).toContain('Congratulations!');
    })
})