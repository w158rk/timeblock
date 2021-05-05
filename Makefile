ROOT_DIR=$(shell echo %CD%)  # might be used, but not recommended
SRC_DIR=timeblock
FRONT_DIR=react/timeblock
GRAMMAR_DIR=$(SRC_DIR)/grammar

ifeq ($(OS),Windows_NT)     # is Windows_NT on XP, 2000, 7, Vista, 10...
    BUILD_SCRIPT := .\build.cmd
	RM = del /f /q
	RM_DIR = rd /s /q
else
    BUILD_SCRIPT := ./build.sh
	RM = rm -f
	RM_DIR = rm -rf
endif

all : deploy

build:
	$(BUILD_SCRIPT)
	cd $(FRONT_DIR) && npm install && npm run build

deploy: 
	$(RM_DIR) $(SRC_DIR)/templates 
	ln -s $(FRONT_DIR)/build $(SRC_DIR)/templates

clean:
	$(RM) $(GRAMMAR_DIR)/TimeBlock*.py
	$(RM) $(GRAMMAR_DIR)/*.interp
	$(RM) $(GRAMMAR_DIR)/*.tokens
