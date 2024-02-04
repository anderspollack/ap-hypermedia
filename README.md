# AP Hypermedia

## Misc

``` sh
docker pull alpine                              # (optional) pull in latest alpine image
```

## Docker container

Easy way for dev is `docker compose up`. http://localhost:4444

### Build

``` sh
docker build -t ap-hypermedia .
```

### Run

``` sh
docker run --name ap-hypermedia-content -d -p 4444:80 ap-hypermedia
```

### Shell

``` sh
docker container run -ti ap-hypermedia /bin/sh
exit
# CTRL-D also exits
```

## NGINX

