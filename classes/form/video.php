<?php
namespace local_lat_groupprofilesettings\form;

defined('MOODLE_INTERNAL') || die();
require_once($CFG->libdir.'/formslib.php');

use moodleform;

class video extends moodleform {
    public function definition() {
        $mform = $this->_form;
        $mform->addElement('html', '<p>This is the video form</p>');
    }
}