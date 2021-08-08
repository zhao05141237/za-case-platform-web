#!/bin/bash
pwd
npm run build:prod

if [ $DEPLOY_ENV = 'test' ];
then
    mv /etc/nginx/conf.d/nginx_app_test.conf /etc/nginx/conf.d/nginx_app.conf
    rm -rf /etc/nginx/conf.d/nginx_app_pre.conf /etc/nginx/conf.d/nginx_app_prd.conf
elif [ $DEPLOY_ENV = 'pre' ];
then
    mv /etc/nginx/conf.d/nginx_app_pre.conf /etc/nginx/conf.d/nginx_app.conf
    rm -rf /etc/nginx/conf.d/nginx_app_test.conf /etc/nginx/conf.d/nginx_app_prd.conf
elif [ $DEPLOY_ENV = 'prd' ];
then
    mv /etc/nginx/conf.d/nginx_app_prd.conf /etc/nginx/conf.d/nginx_app.conf
    rm -rf /etc/nginx/conf.d/nginx_app_pre.conf /etc/nginx/conf.d/nginx_app_test.conf         
else
    echo "env error"
fi
nginx -g "daemon off"\;