#!/bin/sh

cp /app/.docker/canopy/env.local /app/.env.local

yarn

yarn global add serve
yarn build

serve -s build
