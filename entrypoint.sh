#!/bin/sh
# Replace ${PORT} placeholder in the nginx config template
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /tmp/default.conf
# Move the generated config to the correct location
cat /tmp/default.conf > /etc/nginx/conf.d/default.conf
exec nginx -g 'daemon off;'
