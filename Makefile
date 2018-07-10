all: help
NAME=lerna-kit

help:
	@echo ""
	@echo "COMMANDS"
	@echo "   1. make install		- install the cli command"
	@echo "   2. make build   	- build docker image"
	@echo "   3. make test    	- run test suit"

bootstrap:
	./bin/bootstrap


# incl. hacks for `lerna` based packages
# https://github.com/node-modules/autod/issues/34
install:
	@npm install --global autod
	@autod
	@npm install --verbose
	@npm install --save-dev @commitlint/{cli,config-conventional}


build:
	docker build -t ${NAME} .


test: build
	docker run --rm ${NAME}
