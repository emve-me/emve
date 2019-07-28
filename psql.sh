#!/usr/bin/env bash

docker exec -it emve_postgres psql --no-password -h "db" -p "5432" -U postgres