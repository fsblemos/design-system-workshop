#!/bin/bash
set -e

echo "~~~ :eyeglasses: Checks"

echo "SONARQUBE_HOST_URL: $SONARQUBE_HOST_URL"
test -z "$SONARQUBE_HOST_URL" && exit 1

echo "SONARQUBE_TOKEN: $(echo $SONARQUBE_TOKEN | cut -c-6)..."
test -z "$SONARQUBE_TOKEN" && exit 1

echo "~~~ node version"
node -v

echo "~~~ npm version"
npm -v

echo "~~~ npm install"
npm install --silent

echo "~~~ format"
npm run format

echo "~~~ build"
NODE_ENV=production npm run build

echo "~~~ tests"
npm run test

echo "~~~ Master Analyze"
sonar-scanner \
    -Dsonar.verbose=true \
    -Dsonar.host.url=$SONARQUBE_HOST_URL \
    -Dsonar.login=$SONARQUBE_TOKEN
