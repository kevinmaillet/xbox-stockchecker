#How I got my Xbox Series X.

##Simple Selenium Webdriver Script to check Xbox Series X stock at best buy, gamestop, microsoft, and target.

###This app utilizies selenium hub (chrome standalone) run in a docker container, selenium webdriver, and the twilio api.

###To use this project you will need, a twilio account w/ a number set up and accountSID and authtoken, preferably a server to run this on (digital ocean droplet or raspberry pi will work), and Node.js and npm installed on server. Make sure the .env.example file is filled out and then changed to .env

###Once app is installed on server run npm run start-docker-server. This will install the selenium docker image which will be run on port 4444. Once this is done you can set up a cronjob to be run (recommend every 5 minutes) periodically which will then check each website for stock availability and then text you if there is stock with the link to the website.

###Once you have gotten your xbox don't forget to stop the selenium server by running npm run stop-docker-server.
