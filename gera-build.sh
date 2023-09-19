##bin/sh

npm run build

cp -rf build/ ../app-store-centroinfo/build

echo 'sucess'

rm -rf build

echo 'removido build no DEV !!!'