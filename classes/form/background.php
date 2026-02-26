<?php
namespace local_lat_groupprofilesettings\form;

defined('MOODLE_INTERNAL') || die();
require_once($CFG->libdir.'/formslib.php');

use moodleform;

class background extends moodleform {
    public function definition() {
        $mform = $this->_form;
        $mform->addElement('html', '<p>This is the background form</p>');
    }
}