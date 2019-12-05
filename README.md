# fullstackjs

## example repo for fullstack js development

### contains:

- node server
- frontend (vue/vuetify)
- mongodb with mongoose
- nginx reverse proxy with SSL
- docker containers for every service (combined in docker-compose)
- linting & testing setup for each service
- pre-commit linting & testing hooks

### ssl certificates steps

- install mkcert
- run mkcert -install
- run mckert mydomain.whatever
- place .crt & .key in ssl folder
- set mydomain.whatever in the default.conf
