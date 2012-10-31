(function (window, document, LinkedOptions, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var games = {
                "Aventure": ["Crash Bandicoot", "Les Schtroumpfs", "Harry Potter"],
                "FPS": ["Call Of Duty", "Crysis", "UT"]
            },
            linkedOptions = new LinkedOptions(document.getElementById('my-container'), games);

        document.getElementById('test').addEventListener('click', function () {
            linkedOptions.setData({
                "": null,
                "Aventure": ["Crash Bandicoot", "Les Schtroumpfs", "Harry Potter"],
                "FPS": ["Call Of Duty", "Crysis", "UT"]
            });
        }, false);

    }, false);
}(window, window.document, window.linkedOptions.LinkedOptions));
