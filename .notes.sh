yarn build &&

git checkout -B gh-pages &&

mv build/ .build/ &&

rm -r * &&

mv .build/* ./ &&

rm -rf .build/ &&

git add . &&

git commit -m "$1"
