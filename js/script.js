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

/**
 * Admin tutor selector functionality for lat_tutorpro.
 *
 * @package    local_lat_tutorpro
 * @copyright  2026 Zunyr Haiyydr
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const selector = document.getElementById('group-selector');
        const trigger = document.getElementById('group-selector-trigger');
        const panel = document.getElementById('group-selector-panel');
        const searchInput = document.getElementById('group-selector-search');

        if (!selector || !trigger || !panel) {
            return;
        }

        // Toggle dropdown.
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = selector.getAttribute('data-open') === 'true';
            toggleDropdown(!isOpen);
            trigger.classList.toggle("open")
        });

        // Close on outside click.
        document.addEventListener('click', function (e) {
            if (!selector.contains(e.target)) {
                toggleDropdown(false);
            }
        });

        // Close on escape.
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                toggleDropdown(false);
            }
        });


        /**
         * Toggle the dropdown panel.
         *
         * @param {boolean} open Whether to open the dropdown.
         */
        function toggleDropdown(open) {
            selector.setAttribute('data-open', open ? 'true' : 'false');
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');

            if (open) {
                panel.classList.remove('hidden');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.value = '';
                    // Reset search filter.
                    const items = tutorList.querySelectorAll('.lat-admin-tutor-item');
                    items.forEach(function (item) {
                        item.style.display = '';
                    });
                }
            } else {
                panel.classList.add('hidden');
            }
        }
    });
})();
