# Vue CLI plugin for disabling hashing of filenames

It is often that we need to deploy the assets with predictible file names. That happens especially with environments like content management systems (Sitecore, AEM, Wordpress and the like).

By default Vue CLI makes use of hashes in filenames. And that is great since also the index.html is also adjusted to include the proper files and if you're deploying all the artifacts as-is this is definitelly the way to go. However, in the rare projects where artifacts need to be named predictably this plugin is here to help.

## Configuration

There is one configuration option that allows you to turn the plugin on or off:

vue.config.js
```
module.exports = {
  pluginOptions: {
    disableHashedFilenames: true
  }
}
```

If you set `disableHashedFilenames` to false this plugin will be basically disabled and the default behavior will be in effect (that is filenames will include hashes).
