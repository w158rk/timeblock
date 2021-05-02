from .grammar import TimeBlockVisitor
from .event import get_event, add_event
from .record import add_record

class TreeVisitor(TimeBlockVisitor):

    def visitEvent(self, ctx):
        name = ctx.eventname().getText()
        color = ctx.color()
        color = color.getText() if color else None
        add_event(name, color)

    def visitRecord(self, ctx):
        date = ctx.date()
        time = ctx.time()
        length = int(ctx.length().getText())
        event = ctx.eventname().getText()
        note = ctx.note()

        if date:
            date = date.getText()
        if time:
            time = time.getText()
        if note:
            note = note.getText()

        add_record(length, event, note, date, time)
