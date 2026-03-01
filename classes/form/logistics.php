<?php
namespace local_lat_groupprofilesettings\form;

defined('MOODLE_INTERNAL') || die();
require_once($CFG->libdir.'/formslib.php');

use moodleform;

class logistics extends moodleform {
    public function definition() {
        $mform = $this->_form;
        $mform->addElement('html', '<h3 class="heading mb-24 mt-0">' . 'Logistics' . '</h3>');

          // save
        $this->add_action_buttons(false, get_string('save'));
    }
}