'use strict';
const navigation = require("../helpers/navigationHelper");
const { I } = inject();

module.exports = {
    url: '/live',
    livestreamPlayer: '.aj-video-player',
    switchPlayerButton: '#liveStreamPlayerHelpButton',

    async open() {
        await navigation.navigateTo(this.url)
    },
};
