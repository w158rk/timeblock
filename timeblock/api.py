from flask import Flask, render_template
import sys
from antlr4 import CommonTokenStream, FileStream
from .grammar import TimeBlockLexer, TimeBlockParser
from .treevisitor import TreeVisitor
from .event import all_events_json, clear_events
from .record import all_records_json, clear_records

filename = None

def clear():
    clear_events()
    clear_records()

def set_file(name):
    global filename
    filename = name

    try:
        input_stream = FileStream(filename, encoding='utf-8')
        lexer = TimeBlockLexer(input_stream)
        stream = CommonTokenStream(lexer)
        parser = TimeBlockParser(stream)
        tree = parser.desc()
        # print(tree.toStringTree(recog=parser))

        clear()
        visitor = TreeVisitor()
        visitor.visit(tree)
    except Exception as e:
        print(e)
        pass

app = Flask(__name__, static_folder="templates/")


@app.route("/api/records")
def records():
    return all_records_json()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def main(path):
    return render_template('index.html')

