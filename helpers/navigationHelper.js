// helpers/navigationHelper.js
const { I } = inject();

module.exports = {
    /**
     * Navigates to the given path and explicitly waits for the page to be fully loaded.
     * This includes waiting until document.readyState becomes 'complete',
     * which ensures all resources (DOM, scripts, images) are fully loaded.
     *
     * This helps avoid flakiness caused by interacting with partially loaded pages.
     *
     * @param {string} path - The relative URL to navigate to (e.g. '/', '/live')
     */
    async navigateTo(path) {
        await I.amOnPage(path);
        console.log('Waiting for document.readyState to be "complete"...');
        for (let i = 0; i < 60; i++) {
            const readyState = await I.executeScript(() => document.readyState);
            console.log(`Current readyState: ${readyState}`);
            if (readyState === 'complete') {
                break;
            }
            await new Promise(r => setTimeout(r, 3000))
        }
        console.log('Page load completed');
    }
};
