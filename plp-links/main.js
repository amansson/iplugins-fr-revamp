iPlugins(function (lib) {

    function writePLPLink(item, textElement) {
        var textlinka = lib.el('a', { href: item.link }, [item.text]);
        var textlinkdiv = lib.el('div', { style: 'text-align:left;margin-top:5px' }, [textlinka]);
        lib.append(textElement, textlinkdiv);
    }

    lib.getData('plp-links').then(function (data) {
        lib.ready(function () {
            var textElement = document.querySelector('.range-page-title');
            if (textElement) {
                data.Links.forEach(function (item) {
                    // Test on www2 for testing purpose
                    // if (window.location.href.indexOf(item.url.replace(/https?:\/\/www.?\./,'')) > -1) {
                    if (window.location.href.indexOf(item.url) > -1) {
                        writePLPLink(item, textElement);
                    }
                });
            }
        });
    });
});
