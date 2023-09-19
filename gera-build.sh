##bin/sh

npm run build

rm -rf ../app-store-centroinfo/build
cp -rf build/ ../app-store-centroinfo/build

echo 'sucess'

rm -rf build

echo 'removido build no DEV !!!'