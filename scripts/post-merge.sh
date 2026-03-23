#!/bin/bash
set -e

npm install --legacy-peer-deps

if [ -d "artifacts/mockup-sandbox" ]; then
  cd artifacts/mockup-sandbox && npm install --legacy-peer-deps && cd ../..
fi
