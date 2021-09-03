#!/bin/sh

cp /app/.docker/canopy/env.local /app/.env.local

yarn

yarn start