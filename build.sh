#!/bin/sh

# Cleanup just in case
rm -fr ./cbox-coldbox-sublime
rm -fr ./target

# Clone sublime central data
git clone https://github.com/lmajano/cbox-coldbox-sublime

#npm install
#npm install convert-snippets-to-vscode

mkdir ./target

# Copy Snippets
cp -v ./cbox-coldbox-sublime/snippets/cfml/*.* ./target
cp -v ./cbox-coldbox-sublime/snippets/handlers/*.* ./target
cp -v ./cbox-coldbox-sublime/snippets/orm/*.* ./target
cp -v ./cbox-coldbox-sublime/snippets/testing/*.* ./target
cp -v ./cbox-coldbox-sublime/snippets/wirebox/*.* ./target

# Copy Skeletons
cp -v ./cbox-coldbox-sublime/skeletons/CacheBox.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/Coldbox.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/box.json.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/handler.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/interceptor-point.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/interceptor.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/model.sublime-snippet ./target
cp -v ./cbox-coldbox-sublime/skeletons/router.sublime-snippet ./target

# Convert Sublime Snippets to VS Code
./node_modules/.bin/snippetToVsCode -s ./target -o ./snippets/snippets.json

# Build it
node ./build/build-data-source.js

## Cleanup
#npm uninstall convert-snippets-to-vscode
rm -fr ./cbox-coldbox-sublime
rm -fr ./target

echo "DONE."