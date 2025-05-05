'use strict';

const { I, homePage, livePage } = inject();
const assert = require('assert');

Given('I am on the {string} page', async (page) => {
    console.log(`Navigating to the "${page}" page`);
    if (page === 'home') {
        await homePage.open();
    } else if (page === 'live') {
        await livePage.open();
    } else {
        throw new Error(`Page "${page}" is not recognized.`);
    }
});

Then('I should see the {string} section', async (section) => {
    console.log(`Verifying visibility of "${section}" section`);
    let sectionSelector;
    if (section === 'Most Read') {
        console.log('Action: Locating selector for "Most Read" section');
        sectionSelector = homePage.mostReadSection;
    } else {
        throw new Error(`Section "${section}" is not recognized.`);
    }
    console.log(`Checking visibility of selector: ${sectionSelector}`);
    await I.waitForElement(sectionSelector,5)
    await I.seeElement(sectionSelector);
    console.log(`Result: "${section}" section is visible`);
});

Then('I should not see the {string} section', async (section) => {
    console.log(`Verifying that the "${section}" section is not visible...`);

    let sectionSelector;
    if (section === 'Most Read') {
        sectionSelector = homePage.mostReadSection;
        console.log(`Resolved selector for "${section}" section: ${sectionSelector}`);
    } else {
        throw new Error(`Section "${section}" is not recognized.`);
    }

    const visibleCount = await I.grabNumberOfVisibleElements(sectionSelector);
    console.log(`Number of visible elements matching "${section}": ${visibleCount}`);

    assert.strictEqual(visibleCount, 0, 'Element is visible but should not be');
    console.log(`"${section}" section is correctly not visible.`);
});


Then('I verify the {string} section contains {int} items', async (section, numberOfItems) => {
    let sectionSelector;

    console.log(`Verifying item count in section: "${section}"`);

    if (section === 'Most Read') {
        sectionSelector = homePage.mostReadSection;
    } else {
        throw new Error(`Section "${section}" is not recognized.`);
    }

    const itemSelector = `${sectionSelector} ol > li`;
    console.log(`Using selector: ${itemSelector}`);

    await I.waitForVisible(sectionSelector, 10);
    await I.waitForElement(itemSelector, 30);

    const items = await I.grabNumberOfVisibleElements(itemSelector);
    console.log(`Found ${items} visible items in "${section}" section`);

    if (items !== numberOfItems) {
        throw new Error(`Expected ${numberOfItems} items, but found ${items} in the "${section}" section.`);
    } else {
        console.log(`Item count matches expected: ${numberOfItems}`);
    }
});

When('I activate Bypass Block for {string}', async (section) => {
    if (section === 'Most Read') {
        await homePage.activateBypassMenu();
    } else {
        throw new Error(`Section "${section}" is not recognized.`);
    }
});

Then('I verify the URL has the proper ending', async () => {
    console.log('Grabbing current URL...');

    const url = await I.grabCurrentUrl();

    console.log(`Current URL: ${url}`);
    console.log(`Expected ending: ${homePage.mostReadSectionId}`);

    assert.ok(
        url.endsWith(homePage.mostReadSectionId),
        `Expected URL to end with "${homePage.mostReadSectionId}", but got "${url}".`
    );
    console.log('URL ends with the expected value.');
});

Then('I should see the {string}', async (elementName) => {
    let elementSelector;

    console.log(`Looking for element: ${elementName}`);

    if (elementName === 'livestream player') {
        elementSelector = livePage.livestreamPlayer;
        console.log(`Found selector for livestream player: ${elementSelector}`);
    } else if (elementName === 'switch player button') {
        elementSelector = livePage.switchPlayerButton;
        console.log(`Found selector for switch player button: ${elementSelector}`);
    } else {
        console.error(`Error: Element "${elementName}" is not recognized.`);
        throw new Error(`Element "${elementName}" is not recognized.`);
    }
    console.log(`Checking if the element ${elementName} is visible on the page.`);
    await I.waitForElement(elementSelector, 5);
    await I.seeElement(elementSelector);

    console.log(`Element ${elementName} is visible on the page.`);
});
