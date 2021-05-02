ROOT_DIR=$PWD
SRC_DIR=$ROOT_DIR/timeblock
GRAMMAR_FILE=$SRC_DIR/grammar/TimeBlock.g4

export CLASSPATH=".:$ROOT_DIR/bin/antlr-4.9.2-complete.jar:$CLASSPATH"
alias antlr4='java -jar $ROOT_DIR/bin/antlr-4.9.2-complete.jar'
alias grun='java org.antlr.v4.gui.TestRig'
antlr4 -Dlanguage=Python3 -visitor -no-listener $GRAMMAR_FILE