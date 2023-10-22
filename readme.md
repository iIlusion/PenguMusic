<h1 align="center">
  <br>
  <a href="https://pengu.lol/"><img src="https://i.imgur.com/pV2Pvzr.png" alt="Markdownify" width="200"></a>
  <br>
  Pengu Music
  <br>
</h1>

<h4 align="center">A plugin to update your League Of Legends status with what you're listening to at the moment using <a href="https://pengu.lol/" target="_blank">Pengu Loader</a>.</h4>

<p align="center">
  <a href="#how-to-install">How To Install</a> •
  <a href="#how-to-use-spotify">How To Use Spotify</a> •
  <a href="#how-to-use-lastfm">How To Use LastFM</a> •
</p>

<p align="center">
	<img src="https://user-images.githubusercontent.com/49544373/221472119-7f8bf8b7-e9bc-4ad4-b4c7-f94b79d7608a.gif">
</p>

## How To Install

Go to [releases](https://github.com/iIlusion/PenguMusic/releases) and download last release then open zip and drop Pengu Music folder inside pengu loader plugins folder

## How To Use Spotify
```bash
Login in your spotify account in your browser

Go to https://spotify-refresh-token-generator.netlify.app/

Click Get Started

# \/ Skip if you already have a spotify app (Click already got the required data? Skip this step)
Click Open Spotify Developer Dashboard

Click Create APP

Fill in the name and description with whatever you want

In Redirect URI enter https://spotify-refresh-token-generator.netlify.app

Agree to the terms and click Save

Go to Settings and copy the Client ID and Client secret

Back to the first website
# /\ Skip if you already have a spotify app (Click already got the required data? Skip this step)

Fill in the Client ID and Client Secret with the IDS you copied earlier

Check user-read-currently-playing on the scopes then click Get Spotify Access Code

Copy the refresh token in the next screen

Go to PenguMusic folder and open config.json with notepad

Place the refresh token you copied inside the refreshToken quotes 
and fill in the client_id and client_secret with the ids you copied earlier

Set mode to "SPOTIFY" and enable to true
Restart or open League Client and it will be working normally
```

## How To Use LastFM
```bash
Login in your LastFM account in your browser

Create a api account https://www.last.fm/api/account/create
or
Get your api infos https://www.last.fm/api/accounts

Go to PenguMusic folder and open config.json with notepad

Place the api key on the "key" and your LastFM user in "user"

Set mode to "LASTFM" and enable to true
Restart or open League Client and it will be working normally
```

## Credits

- [Pengu Loader](https://pengu.lol/)
- [spotify-refresh-token-generator](https://github.com/limhenry/spotify-refresh-token-generator)

## You may also like...

- [Pengu Name Spoofer](https://github.com/amitmerchant1990/pomolectron) - A plugin to hide all summoner names in the client