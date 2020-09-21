Push-Location ./Angular/
npm install
ng build --prod --aot --base-href "https://novacodecamp.org/app/"
Pop-Location
Remove-Item -Recurse -Force -Confirm:$false ./app
Move-Item -Force ./Angular/dist/* ./app 