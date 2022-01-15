
# GmailJS Node boilerplate

![Node.js CI](https://github.com/josteink/gmailjs-node-boilerplate/workflows/Node.js%20CI/badge.svg)

This repo contains sample code to get a WebExtensions-based
browser-extension using
the [gmail.js](https://github.com/KartikTalwar/gmail.js/) library.

## Usage

First get the code and build it:

````
# get code
git clone https://github.com/josteink/gmailjs-node-boilerplate/

# get deps and build
cd gmailjs-node-boilerplate
npm install
# ensure you're running latest version!
npm update
npm run build
````

Now ensure the code loads and works:

* Load the folder containing the extension (`manifest.json`) in
your browser.
* Load `mail.google.com` in your browser and open the developer console.

You should be greeted by a message saying the following

    Hello, <you>. This is your extension talking!

If that works, you should now be ready to customize the
extension-code. Do this by editing `extension.js` and rerunning `npm run build`. 

You can also interact with a instance of Gmail.js ready for use. `gmail`
should already be exposed in the developer console as a global
variable.

You can use this to get familiar with the API.

Cheers!

## Disclaimer

This project first and foremost about learning. It is **NOT** set up or configured as one would typically create a production WebExtension, and there are several things which can be changed or improved in how things are built and packaged. 

*This is an intentional choice.*

The aim for this project is not to have a ready-to-use production setup with loads of complex dependencies and tool chain specific configurations.  

Instead this project aims to demonstrate the absolutely simplest way possible one can embed Gmail.js in one's own extension, without introducing any other needless or complicating factors. Thus making it easier to adapt into your own projects and toolchains you already know well. 

It's also meant as a simple way to test the gmail.js API and capabilities without having to setup any of your own first. 

Lastly it's also a simple playground where big-reports can easily be reproduced or verified. 

None of these goals aligns particularly well with having a pre-made, production-ready, size-optimized, security-hardened setup. And that's perfectly ok, especially for learning. 

## Regarding WebExtension Manifest versions

Gmail.JS and this boilerplate repo was originally developed when
WebExtension [Manifest V2](https://developer.chrome.com/docs/extensions/mv2/manifest/) were
in place.  Thanks to the help of **@tomer-regev** this boilerplate repo now
uses [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
instead.

If you for whatever reason still want to use the V2 code, check out the code
back at [ManifestV2-tag](https://github.com/josteink/gmailjs-node-boilerplate/tree/ManifestV2), which has been maintained for historical reasons.

Either way, Gmail.JS itself should work fine under both versions with
no change required in your extension-code, unless your extension
itself has code which needs to be migrated.

For more advice about upgrades, see the [Chrome documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/).
