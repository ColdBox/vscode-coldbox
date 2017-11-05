$snippets = @(
    ".\cbox-coldbox-sublime\snippets\cfml\*.*",
    ".\cbox-coldbox-sublime\snippets\handlers\*.*",
    ".\cbox-coldbox-sublime\snippets\orm\*.*",
    ".\cbox-coldbox-sublime\snippets\wirebox\*.*",
    ".\cbox-coldbox-sublime\skeletons\box.json.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\CacheBox.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\Coldbox.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\handler.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\interceptor.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\interceptor-point.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\model.sublime-snippet",
    ".\cbox-coldbox-sublime\skeletons\routes.sublime-snippet"
)

git clone https://github.com/lmajano/cbox-coldbox-sublime
npm install convert-snippets-to-vscode

mkdir .\target
foreach ($path in $snippets) {
    cp -recurse $path .\target
}

.\node_modules\.bin\snippetToVsCode -s .\target -o .\snippets\snippets.json

npm uninstall convert-snippets-to-vscode
rm -recurse -force .\node_modules
rm -force .\package-lock.json
rm -recurse -force .\cbox-coldbox-sublime
rm -recurse -force .\target

echo "DONE."