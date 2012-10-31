(function (window, document, undefined) {
    'use strict';

    var exports = window.linkedOptions = {};

    exports.LinkedOptions = LinkedOptions;

    function LinkedOptions(containerElt, data) {
        var self = this;

        if (!containerElt) {
            throw new Error('linked options: no container given');
        }
        if (!containerElt) {
            throw new Error('linked options: no data given');
        }
        this.data = data;
        this.masterElt = containerElt.getElementsByClassName('lo-master')[0];
        this.slaveElt = containerElt.getElementsByClassName('lo-slave')[0];

        if (!this.masterElt) {
            throw new Error('linked options: couldn\'t retrieve master element');
        }
        if (!this.slaveElt) {
            throw new Error('linked options: couldn\'t retrieve slave element');
        }

        _refreshMasterOptions.call(this);

        this.masterElt.addEventListener('change', function () {
            _refreshSlaveOptions.call(self);
        }, false);

        _refreshSlaveOptions.call(this);
    }

    LinkedOptions.prototype.setData = function(newData) {
        this.data = newData;
        
        _refreshMasterOptions.call(this);
        _refreshSlaveOptions.call(this);
    };

    function _refreshMasterOptions() {
        var masterValues = [],
            value;

        for (value in this.data) {
            masterValues.push(value);
        }
        _fillSelectElement(this.masterElt, masterValues);
    }

    function _refreshSlaveOptions() {
        var slaveValues = this.data[this.masterElt.value] || [];

        _fillSelectElement(this.slaveElt, slaveValues);
    }

    function _fillSelectElement(selectElt, values) {
        selectElt.innerHTML = '';

        values.forEach(function (value) {
            var optionElt = document.createElement('option'),
                optionTxtElt = document.createTextNode(value);

            optionElt.appendChild(optionTxtElt);
            selectElt.appendChild(optionElt);
        });
    }
}(window, window.document));
