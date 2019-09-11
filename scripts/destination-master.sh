#!/bin/bash
set -euo pipefail

echo "Installing dependencies"
npm install

echo "Building and publishing"
npm publish
