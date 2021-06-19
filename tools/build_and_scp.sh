npm run build && tar zcvf dist.tar.gz ./dist/ && ls -al dist.tar.gz

scp  -P 2222 ./dist.tar.gz  root@$PUBLIC_ECS_IP:/root/myproject/pppoe_website/
