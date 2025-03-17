import {expect } from '@wdio/globals'
import DragAndDropPage from '../pageobjects/dragDrop.page.js'

describe('Drag and Drop Test', () => {
    it('should drag element A and drop it into element B', async () => {
        await DragAndDropPage.open();

        await DragAndDropPage.dragAndDropElement();

        const droppedText = await DragAndDropPage.elementB.getText(); 
        
        expect(droppedText).toBe('A');
    })
})