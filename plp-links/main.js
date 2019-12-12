iPlugins(function (lib) {

    function writePLPLink(item) {
        var textlinka;

        if (item.icon !== 'undefined') {
            var textlinkicon = lib.el('img', { style: 'width:20px; margin-right:10px;', src: item.icon });
            textlinka = lib.el('a', { href: item.link }, [textlinkicon, item.text]);
        } else {
            textlinka = lib.el('a', { href: item.link }, [item.text]);
        }

        var textlinkdiv = lib.el('div', { style: 'display:block;margin:0 auto;margin-top:20px;text-align:center;margin-bottom:20px;' }, [textlinka]);

        lib.prepend(document.querySelector('.range-main-container'), textlinkdiv);
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
            setTimeout(function () {
                workthedataPLPLink(data);
            }, 250);
        }
    }

    lib.getData('plp-links').then(function (data) {
        workthedataPLPLink(data);
    });
});
