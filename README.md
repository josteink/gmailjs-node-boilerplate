
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

* Load the folder containing the extension (or `manifest.json`) in
your browser.
* Load `mail.google.com` in your browser and open the developer console.

You should be greeted by a message saying the following

    Hello, <you>. This is your extension talking!

If that works, you should now be ready to customize the
extension-code. Do this by editing `extension.js`.

You can also interact with a instance of Gmail.js ready for use. `gmail`
should already be exposed in the developer console as a global
variable.

You can use this to get familiar with the API.

Cheers!
