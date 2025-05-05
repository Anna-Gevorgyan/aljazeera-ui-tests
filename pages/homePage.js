'use strict';

const { I } = inject();
const navigation = require('../helpers/navigationHelper');
module.exports = {
    url: '/',
    mostReadSection: '.trending-articles',
    mostReadItems: '#most-read-container .most-read__item',
    skipToMostRead: 'a[href="#most-read-container"]',
    header: '.header-menu site-header container__inner',
    bypassLink:'a.bypass-block-link[href="#most-read-container"]',
    mostReadSectionId: '#most-read-container',

    async open() {
     await navigation.navigateTo(this.url)
    },

    async activateBypassMenu() {
        console.log('Clicking bypass link...');
        await I.waitForElement(this.bypassLink, 5)
        await I.forceClick(this.bypassLink);
        console.log('Bypass link clicked.');
    }
};