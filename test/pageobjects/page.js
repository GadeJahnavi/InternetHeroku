import { browser } from '@wdio/globals'

export default class Page {

    open(path) {
        browser.maximizeWindow();
        return browser.url('https://the-internet.herokuapp.com/'+path)
    }

    pauseExecution(milliseconds) {
        return browser.pause(milliseconds)
    }

    async refreshPage() {
        await browser.refresh();
    }
}
