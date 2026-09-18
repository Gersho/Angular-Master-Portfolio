docker run -d \
  --name my-portfolio \
  --network traefik-network \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.frontend.rule=Host(\`test.zennoune.fr\`)" \
  --label "traefik.http.routers.frontend.entrypoints=websecure" \
  --label "traefik.http.routers.frontend.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.frontend.loadbalancer.server.port=80" \
  portfolio:1.0
