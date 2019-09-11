#!/bin/bash
set -e

echo "~~~ :eyeglasses: Checks"

echo "SONARQUBE_HOST_URL: $SONARQUBE_HOST_URL"
test -z "$SONARQUBE_HOST_URL" && exit 1

echo "SONARQUBE_TOKEN: $(echo $SONARQUBE_TOKEN | cut -c-6)..."
test -z "$SONARQUBE_TOKEN" && exit 1

echo "GITHUB_TOKEN: $(echo $GITHUB_TOKEN | cut -c-6)..."
test -z "$GITHUB_TOKEN" && exit 1

echo "GITHUB_ORGANIZATION: $BUILDKITE_ORGANIZATION_SLUG"
test -z "$BUILDKITE_ORGANIZATION_SLUG" && exit 1

echo "GITHUB_PROJECT: $BUILDKITE_PIPELINE_SLUG"
test -z "$BUILDKITE_PIPELINE_SLUG" && exit 1

echo "GITHUB_PULL_REQUEST: $BUILDKITE_PULL_REQUEST"
test -z "$BUILDKITE_PULL_REQUEST" && exit 1
test "$BUILDKITE_PULL_REQUEST" = "false" && exit 1

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

echo "~~~ Pull Request Analyze"
sonar-scanner \
    -Dsonar.verbose=true \
    -Dsonar.analysis.mode=preview \
    -Dsonar.github.oauth=$GITHUB_TOKEN \
    -Dsonar.github.repository=$BUILDKITE_ORGANIZATION_SLUG/$BUILDKITE_PIPELINE_SLUG \
    -Dsonar.github.pullRequest=$BUILDKITE_PULL_REQUEST \
    -Dsonar.host.url=$SONARQUBE_HOST_URL \
    -Dsonar.login=$SONARQUBE_TOKEN
