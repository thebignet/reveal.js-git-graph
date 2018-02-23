import mermaid from 'mermaid'
require("./git-graph.css");

var RevealGitGraph = window.RevealGitGraph || (function () {
    Reveal.addEventListener('ready', function () {
        var config = Reveal.getConfig();
        var options = config.mermaid || {
            startOnLoad: true,
            cloneCssStyles: true,
            flowchart: {
                htmlLabels: false,
                useMaxWidth: true
            },
            gitGraph: {
                nodeFillColor: "#4ED1A1",
                nodeSpacing: 150,
                nodeStrokeWidth: 3,
                nodeStrokeColor: "#555",
                nodeRadius: 17,
                nodeLabel: {
                    width: 100,
                    height: 100,
                    x: -50,
                    y: 20
                },
                branchColors: ["#555", "#555", "#555", "#555"]
            }
        };

        mermaid.initialize(options);

        setTimeout(function () {
            var branches = document.getElementsByClassName("branch-label");
            for (var i = 0; i < branches.length; i++) {
                branches[i].innerHTML = branches[i].innerHTML.substring(0, branches[i].innerHTML.length - 2);
            }
        }, 100);
    });
})();
