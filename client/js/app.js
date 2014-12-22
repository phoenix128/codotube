/**
 * CodoTube
 * @copyright  Copyright (c) 2015 Riccardo Tempesta (http://www.riccardotempesta.com)
 */

CODOF.hook.add('on_scripts_loaded', function () {
    var BBcode2html_Orig = CODOF.BBcode2html;

    function codotube_replace_links(text)
    {
        var re1 = /<a.+?>https*:\/\/www.youtube.com\/watch\?v=(\w+)<\/a>/gi;
        var re2 = /<a.+?>https*:\/\/youtu.be\/(\w+)<\/a>/gi;
        var re3 = /\[youtube (\w+)\]/gi;
        var re4 = /&lt;iframe.+?src="\/\/www.youtube.com\/embed\/(\w+)".+?&gt;&lt;\/iframe&gt;/gi;

        while (m = re1.exec(text))
            text = text.replace(m[0], '<iframe width="800" height="400" src="//www.youtube.com/embed/'+m[1]+'" frameborder="0" allowfullscreen></iframe>');

        while (m = re2.exec(text))
            text = text.replace(m[0], '<iframe width="800" height="400" src="//www.youtube.com/embed/'+m[1]+'" frameborder="0" allowfullscreen></iframe>');

        while (m = re3.exec(text))
            text = text.replace(m[0], '<iframe width="800" height="400" src="//www.youtube.com/embed/'+m[1]+'" frameborder="0" allowfullscreen></iframe>');

        while (m = re4.exec(text))
            text = text.replace(m[0], '<iframe width="800" height="400" src="//www.youtube.com/embed/'+m[1]+'" frameborder="0" allowfullscreen></iframe>');

        return text;
    }

    function codotube_apply()
    {
        jQuery('.codo_posts_post_message:visible').each(function () {
            var $me = jQuery(this);
            var html = $me.html();

            html = codotube_replace_links(html);

            if (html != $me.html()) $me.html(html);
        });
    }

    CODOF.BBcode2html = function(s)
    {
        return codotube_replace_links(BBcode2html_Orig(s));
    }

    jQuery(window).scroll(function() {
        codotube_apply();
    });

    codotube_apply();
});