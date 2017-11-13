#!/bin/sh

Target[1]="./cbox-coldbox-sublime/snippets/cfml/*.*"
Target[2]="./cbox-coldbox-sublime/snippets/handlers/*.*"
Target[3]="./cbox-coldbox-sublime/snippets/orm/*.*"
Target[4]="./cbox-coldbox-sublime/snippets/wirebox/*.*"
Target[5]="./cbox-coldbox-sublime/skeletons/box.json.sublime-snippet"
Target[6]="./cbox-coldbox-sublime/skeletons/CacheBox.sublime-snippet"
Target[7]="./cbox-coldbox-sublime/skeletons/Coldbox.sublime-snippet"
Target[8]="./cbox-coldbox-sublime/skeletons/handler.sublime-snippet"
Target[9]="./cbox-coldbox-sublime/skeletons/interceptor.sublime-snippet"
Target[10]="./cbox-coldbox-sublime/skeletons/interceptor-point.sublime-snippet"
Target[11]="./cbox-coldbox-sublime/skeletons/model.sublime-snippet"
Target[12]="./cbox-coldbox-sublime/skeletons/routes.sublime-snippet"

git clone https://github.com/lmajano/cbox-coldbox-sublime
npm install convert-snippets-to-vscode

mkdir ./target
for i in {1..12}
do
    cp ${Target[i]} ./target
done

./node_modules/.bin/snippetToVsCode -s ./target -o ./snippets/snippets.json

npm uninstall convert-snippets-to-vscode
rm -fr ./cbox-coldbox-sublime
rm -fr ./target

echo "DONE."