describe("wdioTestRecording", () => {
  it("tests wdioTestRecording", async () => {
    await browser.setWindowSize(1230, 981)
    await browser.url("https://the-internet.herokuapp.com/")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/")
    await browser.$("aria/A/B Testing").click()
    await browser.url("https://the-internet.herokuapp.com/")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/")
    await browser.$("aria/Add/Remove Elements").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/add_remove_elements/")
    await browser.$("aria/Add Element").click()
    await browser.$("aria/Delete").click()
    await browser.url("https://the-internet.herokuapp.com/")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/")
    await browser.$("aria/Basic Auth").click()
    await browser.url("https://the-internet.herokuapp.com/basic_auth")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/basic_auth")
    await browser.url("https://the-internet.herokuapp.com/")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/")
  });
});
