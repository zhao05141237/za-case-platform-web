FROM base-registry.zhonganinfo.com/env/nginx:1.15.0
COPY dist /var/www/public
COPY start.sh /
COPY nginx_app_test.conf /etc/nginx/conf.d/nginx_app_test.conf
COPY nginx_app_pre.conf /etc/nginx/conf.d/nginx_app_pre.conf
COPY nginx_app_prd.conf /etc/nginx/conf.d/nginx_app_prd.conf
EXPOSE 8080
CMD ["bash", "start.sh"]