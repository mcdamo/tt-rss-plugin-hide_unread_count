<?php
class Hide_Unread_Count extends Plugin {

    function about()
    {
        return Array(2.0,
            "Hides feed and global unread counts",
            "Cas",
            false,
            "https://github.com/mcdamo/tt-rss-plugin-hide_unread_count"
        );
    }

    function init($host)
    {
        // not required
    }

    function api_version()
    {
        return 2;
    }

    function get_js() {
        return file_get_contents(__DIR__ . "/init.js");
    }
}
