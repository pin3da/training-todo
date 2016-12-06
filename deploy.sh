#! /bin/bash

npm run build
cp -r ./dist ./.dist
git checkout gh-pages
git reset --hard origin/gh-pages
cp -r ./.dist/* .
rm -rf ./.dist
git add -A
git commit -a -m 'gh-pages update'
git push origin gh-pages --force && git checkout master
