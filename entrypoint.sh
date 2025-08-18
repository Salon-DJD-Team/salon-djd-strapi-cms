#!/bin/sh
if [ "$NODE_ENV" = "development" ]; then
  npm run develop
else
  npm start
fi
