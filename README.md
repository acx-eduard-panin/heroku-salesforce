# It is an example of your first Heroku APP

You can find the Heroku connect example and other examples to connect with Salesforce.

## Prepare you environment
- [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [Sign up fo Free](https://signup.heroku.com/trailhead)
- Create the App on the Heroku dashboard
- Follow steps from the **Deploy** section
![img.png](public/img/heroku-deployment.png)
  
## Setup your Environment variables from the CLI 
`heroku config:set MESSAGE=My new message -a heroku-connect-ascendix-demo` -a flag for your APP name

## [Configure Heroku Connect](https://devcenter.heroku.com/articles/heroku-connect#setting-up-heroku-connect)
- Update the `.env` file to connect this APP for your Postgres DB
