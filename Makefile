all: help
NAME=lerna-kit

help:
	@echo ""
	@echo "COMMANDS"
	@echo "   * make init	    - initialize a new project"

init:
	./bin/init


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
