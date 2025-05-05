// helpers/navigationHelper.js
const { I } = inject();

module.exports = {
    async navigateTo(path) {
        await I.amOnPage(path);
        console.log('Waiting for document.readyState to be "complete"...');
        for (let i = 0; i < 20; i++) {
            const readyState = await I.executeScript(() => document.readyState);
            console.log(`Current readyState: ${readyState}`);
            if (readyState === 'complete') {
                break;
            }
            await new Promise(r => setTimeout(r, 1000))
        }
        console.log('Page load completed');
    }
};
