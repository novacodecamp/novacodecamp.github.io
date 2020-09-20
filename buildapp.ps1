Push-Location ./Angular/
npm install
ng build --prod --aot --base-href "https://novacodecamp.org/app/"
Pop-Location
Move-Item -Force ./Angular/dist/* ./app 