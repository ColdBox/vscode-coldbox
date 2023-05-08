#!/bin/sh

# Cleanup just in case
rm -fr ./coldbox-sublime
rm -fr ./target

# Clone sublime central data
git clone https://github.com/ColdBox/coldbox-sublime

#npm install
#npm install convert-snippets-to-vscode

mkdir ./target

# Copy Snippets
cp -v ./coldbox-sublime/snippets/cfml/*.* ./target
cp -v ./coldbox-sublime/snippets/handlers/*.* ./target
cp -v ./coldbox-sublime/snippets/orm/*.* ./target
cp -v ./coldbox-sublime/snippets/testing/*.* ./target
cp -v ./coldbox-sublime/snippets/wirebox/*.* ./target

# Copy Skeletons
cp -v ./coldbox-sublime/skeletons/CacheBox.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/Coldbox.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/box.json.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/handler.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/interceptor-point.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/interceptor.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/model.sublime-snippet ./target
cp -v ./coldbox-sublime/skeletons/router.sublime-snippet ./target

# Convert Sublime Snippets to VS Code
./node_modules/.bin/snippetToVsCode -s ./target -o ./snippets/snippets.json

# Build it
node ./build/build-data-source.js

## Cleanup
#npm uninstall convert-snippets-to-vscode
rm -fr ./coldbox-sublime
rm -fr ./target

echo "DONE."
