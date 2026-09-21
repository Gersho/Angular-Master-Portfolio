docker run -d \
  --name my-portfolio \
  --network traefik-network \
  --label "traefik.enable=true" \
  --label "traefik.docker.network=traefik-network" \
  --label "traefik.http.routers.portfolio.rule=Host('test.zennoune.fr') || Host('portfolio.zennoune.fr') || Host('www.portfolio.zennoune.fr') || Host('www.zennoune.fr') || Host('zennoune.fr')" \
  --label "traefik.http.routers.portfolio.entrypoints=websecure" \
  --label "traefik.http.routers.portfolio.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.portfolio.loadbalancer.server.port=80" \
  portfolio:1.0
