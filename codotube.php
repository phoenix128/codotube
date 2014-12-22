<?php
/**
 * CodoTube
 * @copyright  Copyright (c) 2015 Riccardo Tempesta (http://www.riccardotempesta.com)
 */

function codotube_add_assets() {
    add_js(PLUGIN_PATH.'codotube/client/js/app.js', array('type' => 'defer'));
}

\CODOF\Hook::add('tpl_before_forum_topic', 'codotube_add_assets');

