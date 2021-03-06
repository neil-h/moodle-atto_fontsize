YUI.add('moodle-atto_fontsize-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_fontsize
 * @copyright  2014 Andrew Nicols
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_fontsize-button
 */

/**
 * Atto text editor fontsize plugin.
 *
 * @namespace M.atto_fontsize
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var sizes = [
        {
            value: 1,
            name: "X-Small"
        }, {
            value: 2,
            name: "Small"
        }, {
            value: 3,
            name: "Medium"
        }, {
            value: 4,
            name: "Large"
        }, {
            value: 5,
            name: "X-Large"
        }, {
            value: 6,
            name: "XX-Large"
        }, {
            value: 7,
            name: "XXX-Large"
        }
    ];

Y.namespace('M.atto_fontsize').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        var items = [];
        Y.Array.each(sizes, function(size) {
            items.push({
                text: '<font size="' + size.value + '">' + size.name + '</font>',
                callbackArgs: size.value,
                callback: this._changeStyle
            });
        });

        this.addToolbarMenu({
            globalItemConfig: {
                callback: this._changeStyle
            },
            icon: 'icon',
            iconComponent: 'atto_fontsize',
            items: items
        });
    },

    /**
     * Change the font size to the specified size.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} size The new font size
     * @private
     */
    _changeStyle: function(e, size) {
        document.execCommand("fontSize", false, size);
    }
});


}, '@VERSION@');
