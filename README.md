# reveal.js-git-graph

A [mermaidjs](https://github.com/knsv/mermaid) [reveal](https://revealjs.com/) plugin to generate a visual git graph from a list of simple git commands.

## Installation

### Bower

Download and install the package in your project:

```bower install reveal.js-git-graph```

Add the plugin to the dependencies in your presentation, as below. 

```javascript
Reveal.initialize({
	// ...
	
	dependencies: [
		// ... 
	  
		{ src: 'bower_components/reveal.js-git-graph/dist/git-graph.min.js' }
	]
});
```

### npm

Download and install the package in your project:

```npm install --save reveal.js-git-graph```

Add the plugin to the dependencies in your presentation, as below. 

```javascript
Reveal.initialize({
	// ...
	
	dependencies: [
		// ... 
	  
		{ src: 'node_modules/reveal.js-git-graph/git-graph.min.js' }
	]
});
```

### Manual

Copy this repository into the plugins folder of your reveal.js presentation, ie ```plugins/git-graph```.

Add the plugin to the dependencies in your presentation, as below. 

```javascript
Reveal.initialize({
	// ...
	
	dependencies: [
		// ... 
	  
		{ src: 'plugin/git-graph/dist/git-graph.min.js' }
	]
});
```

## Configuration

You can configure the mermaidjs options by providing a ```mermaid``` option in the reveal.js initialization options. Note that all config values are optional and will default as specified below.

```javascript
Reveal.initialize({
	// ...

	mermaid: {
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
  }
});
```

More information on configuration options can be found in the [mermaidjs documentation](https://mermaidjs.github.io/) or in the more specific git graph options directly in the [gitGraphRenderer.js source file](https://github.com/knsv/mermaid/blob/master/src/diagrams/gitGraph/gitGraphRenderer.js).