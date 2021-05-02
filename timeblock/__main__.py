# import sys
# from antlr4 import CommonTokenStream, FileStream
# from .grammar import TimeBlockLexer, TimeBlockParser
# from .treevisitor import TreeVisitor
# from .event import all_events_json
# from .record import all_records_json

# def main(argv):
#     input_stream = FileStream(argv[1])
#     lexer = TimeBlockLexer(input_stream)
#     stream = CommonTokenStream(lexer)
#     parser = TimeBlockParser(stream)
#     tree = parser.desc()
#     # print(tree.toStringTree(recog=parser))

#     visitor = TreeVisitor()
#     visitor.visit(tree)

#     with open("events.json", "w") as f:
#         f.write(all_events_json())

#     with open("records.json", "w") as f:
#         f.write(all_records_json())

# main(sys.argv)


from .api import app, set_file
import sys
from .watch import observe

path = sys.argv[1]

def reload():
    print('reload')
    set_file(path)

def main():
    set_file(path)
    observer = observe(path, reload)
    app.run(host='192.168.1.104')

main()
