Push-Location ./Angular/
npm install
ng build --prod --aot
Pop-Location
Move-Item ./Angular/dist/* ./app 