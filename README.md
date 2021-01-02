# remark-react-codemirror

[![build status](https://secure.travis-ci.org/craftzdog/remark-react-codemirror.svg)](http://travis-ci.org/craftzdog/remark-react-codemirror)

Syntax highlighting for [remark-react](https://github.com/mapbox/remark-react) through [CodeMirror](https://codemirror.net/).

## Usage

```javascript
import remark from "remark";
import gfm from "remark-gfm";
import reactRenderer from "remark-react";
import sanitizeGhSchema from "hast-util-sanitize/lib/github.json";

import CodeMirror from "codemirror";
import "codemirror/mode/meta";
import "codemirror/addon/runmode/runmode";
import "codemirror/mode/javascript/javascript";
import highlighter from "remark-react-codemirror";

const schema = Object.assign({}, githubSchema, {
  attributes: Object.assign({}, githubSchema.attributes, {
    code: [...(githubSchema.attributes.code || []), "className"],
  }),
});

remark()
  .use(gfm)
  .use(reactRenderer, {
    sanitize: schema,
    remarkReactComponents: {
      code: highlighter(CodeMirror, { theme: "solarized" }),
    },
  })
  .processSync(readme).contents;
```

### Notes

- The default santization schema (GitHub's) excludes `className`, but we want those `cm-*` classes for our highlighting! Hence the custom object passed to `santization`.
- You'll need stylings for the classes that [CodeMirror](https://github.com/codemirror/CodeMirror) adds. You can choose from a bunch bunch of pre-made [stylesheets](https://github.com/codemirror/CodeMirror/tree/master/theme).

## License

MIT. Developed by Takuya Matsuyama <hi@craftz.dog>
