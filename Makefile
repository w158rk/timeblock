ROOT_DIR=$(PWD)
SRC_DIR=$(ROOT_DIR)/timeblock
GRAMMAR_DIR=$(SRC_DIR)/grammar

build:
	./build.sh

clean:
	rm $(GRAMMAR_DIR)/TimeBlock*.py
	rm $(GRAMMAR_DIR)/*.interp
	rm $(GRAMMAR_DIR)/*.tokens