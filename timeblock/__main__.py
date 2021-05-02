import sys
from antlr4 import CommonTokenStream, FileStream
from .grammar import TimeBlockLexer, TimeBlockParser
from .treevisitor import TreeVisitor
from .event import all_events_json
from .record import all_records_json

def main(argv):
    input_stream = FileStream(argv[1])
    lexer = TimeBlockLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = TimeBlockParser(stream)
    tree = parser.desc()
    # print(tree.toStringTree(recog=parser))

    visitor = TreeVisitor()
    visitor.visit(tree)

    print(all_events_json())
    print(all_records_json())

main(sys.argv)
