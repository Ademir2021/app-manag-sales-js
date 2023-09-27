##bin/sh
npm run build

rm -rf ../app-centroinfo/build
cp -rf build/ ../app-centroinfo/build

echo 'sucess'

rm -rf build

echo 'removido build no DEV !!!'