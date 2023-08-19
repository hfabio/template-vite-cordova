# Cordova + Vite + React + Styled-components

This template provides a minimal setup to get React working in Vite for multiple devices using cordova.
It is configured to build the react project inside a `www` folder, and cordova uses it to build.  

this template uses react 18, styled-components, cordova 12 (for android 13).

cordova is installed **IN THE PROJECT** to prevent problems between versions in different projects, for this reason please
remember using yarn before the cordova command like:
```bash
  yarn cordova platform add android
```

cordova configs are based to work with these android settings:
  - java 11 (open-jdk)
  - android build-tools 33.0.2
  - android platform-tools 33
  - gradle 7.6

you can set it using these configurations:
```bash
  # Install Android Image version 33
  yes | sdkmanager --list
  yes | sdkmanager "platforms;android-33"
  sdkmanager "build-tools;32.0.2"
  yes | sdkmanager --list
  yes | sdkmanager --update
  yes | sdkmanager "system-images;android-33;google_apis_playstore;x86_64"
  yes | sdkmanager --channel=3 emulator
  emulator -version
```

we use a tablet for testing in emulator with these avd configuration:
```bash
  avdmanager create avd -n tablet -d 34 -k "system-images;android-33;google_apis_playstore;x86_64"
```

## Launching new version  
In order to launch a new version just update the `package.json` `version` variable and run `node upgrade-version.js`.  
It should upgrade your version in your .env (in case you use it as environment variable in your app) and in the config file for the android release.

