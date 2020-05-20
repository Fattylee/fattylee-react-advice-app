yarn start &&

git checkout -b gh-pages

mv build/ .build/

rm -r *

mv .build/* ./

rm -rf .build/
