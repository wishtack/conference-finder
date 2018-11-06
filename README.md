<p align="center">
    <img src="https://github.com/wishtack/wishtack-conference-finder/blob/master/demo.gif" alt="Conference Finder Demo">
    <h1>Conference Finder Demo</h1>
</p>

# Setup

## 1. Firebase

### 1.1. Install Firebase CLI

```shell
npm install -g firebase-tools
```

### 1.2. Add project

### 1.3. Login
```shell
firebase login
```

## 2. Deploy

###  Configuration
Update your `environment.prod.ts` with your firebase .

## Deploy
```shell
yarn deploy
```

## Download firebase service account credentials

https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app

## Add administrators

```shell
yarn set-admin-role
```
