<h1>Conference Finder Demo</h1>
<p align="center">
    <img src="https://github.com/wishtack/wishtack-conference-finder/blob/master/demo.gif" alt="Conference Finder Demo">
</p>

# Setup

## 1. Firebase

### 1.1. Install Firebase CLI

```shell
yarn global add firebase-tools
```

### 1.2. Create project
https://firebase.google.com/docs/web/setup

### 1.3. Login
```shell
firebase login
```

## 2. Deploy

###  2.1. Configuration
Update your `environment.prod.ts` with your firebase .

## 2.2. Deploy
```shell
yarn deploy
```

## 3. Add administrators

### 3.1. Download firebase service account credentials

https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app

## 3.2. Run `yarn set-admin-role`

```shell
yarn set-admin-role \
    --service-account-path ~/somewhere/firebase-adminsdk.json \
    --emails user1@wishtack.com,user2@wishtack.com
```
