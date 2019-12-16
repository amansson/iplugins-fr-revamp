iPlugins(function (lib) {

    function writePLPLink(item) {
        var textlinka = lib.el('a', { href: item.link }, [item.text]);
        var textlinkdiv = lib.el('div', { style: 'text-align:left;margin-top:5px' }, [textlinka]);
        lib.append(document.querySelector('.range-page-title'), textlinkdiv);
    }

    function workthedataPLPLink(data) {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            //if page is loaded, loop through data and make tags
            data.Links.forEach(function (item) {
                if (window.location.href.indexOf(item.url) > -1) {
                    writePLPLink(item);
                }
            });
        } else {
            lib.ready(workthedataPLPLink(data));
        }
    }

    lib.getData('plp-links').then(function (data) {
        workthedataPLPLink(data);
    });
});
