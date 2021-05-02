ROOT_DIR=$(PWD)
SRC_DIR=$(ROOT_DIR)/timeblock
GRAMMAR_DIR=$(SRC_DIR)/grammar
FRONT_DIR=$(ROOT_DIR)/react/timeblock

all : deploy

build:
	./build.sh
	cd $(FRONT_DIR) && && npm install && npm run build

deploy: 
	rm -rf $(SRC_DIR)/templates
	ln -s $(FRONT_DIR)/build $(SRC_DIR)/templates

clean:
	rm $(GRAMMAR_DIR)/TimeBlock*.py
	rm $(GRAMMAR_DIR)/*.interp
	rm $(GRAMMAR_DIR)/*.tokens
