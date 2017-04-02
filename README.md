# Ember + Lux Starter App

This app serves as basic boilerplate for an [Ember](https://emberjs.com) + [Lux](https://github.com/postlight/lux) application.

## Features
### Authentication
Basic authentication via [JWT](https://jwt.io) is provided. [Ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and [ember-simple-auth-token](https://github.com/jpadilla/ember-simple-auth-token) are used in the client. By default a token is valid for 30 minutes or 7 days when "remember me" is ticked on login. These values can be customized in `server/app/utils/constants`.

### Models
A single User model with basic attributes is present in both the server and the client.

### Semantic UI
[Semantic UI](https://semantic-ui.com/) is available in this package. It is only partially imported by default to keep the file size down. You can change which components you want to import in app/styles/semantic-ui.less.

> #### Note
> In the current iteration it is necessary to manually run `npm run reload-theme-config` after changing the `app/styles/theme.config` file. This copies the theme file to the correct location: `bower_components/semantic-ui/src/theme.confg`.

> As it uses the `cp` command, this does not currently work on Windows.

---

## Setup
The repository contains two folders: client and server. These each serve as the root of their respective applications. Below are instructions to setup both and get the complete application running.

### Server

- Create a `server/.env` file with `JWT_SECRET=SomeImpossibleSecret`
- Globally install Lux by running `npm install -g lux-framework`
- Install dependencies by running `npm install`
- Create, migrate and seed an sqlite database by running `lux db:create && lux db:migrate && lux db:seed`
- Start the development server by running `npm run dev`

### Client

- Globally install ember-cli by running `npm install -g ember-cli`
- Install dependencies by running `npm install && bower install`
- Start the application by running `ember s`

You can now visit the application by going to <http://localhost:4200>.

---

For further documentation please consult the [Ember](https://emberjs.com) and [Lux](https://github.com/postlight/lux) websites.
