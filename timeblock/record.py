
from .event import get_event
from .time import get_current_date, get_current_time, set_current, inc_current
import datetime
import json

records = []

class Record(object):

    def __init__(self, date, time, length, event, note):
        self.date = date
        self.time = time 
        self.length = length 
        self.event = event 
        self.note = note
        self.color = get_event(event).color

    def __repr__(self):
        ret = []
        ret.append(self.date.strftime('%Y-%m-%d'))
        ret.append(self.time.strftime('%H:%M'))
        ret.append(str(self.length))
        ret.append(self.event)
        ret.append(self.note) if self.note else ''
        ret.append(self.color)
        return ', '.join(ret)

def add_record(length, event, note="", date="", time=""):
    
    get_event(event)         # might raise KeyError
    if date:
        nums = date.split('-')
        assert(len(nums)==3)
        year, month, day = map(lambda x:int(x), nums)
        date = datetime.date(year, month, day)
    else:
        date = get_current_date()

    if time:
        nums = time.split(':')
        assert(len(nums)==2)
        hour, minute = map(lambda x:int(x), nums)
        time = datetime.time(hour, minute)
    else:
        time = get_current_time()
    
    set_current(date, time)
    inc_current(length)

    if note:
        note = note.lstrip('"').rstrip('"')

    date = date.strftime('%Y-%m-%d')
    time = time.strftime('%H:%M')
    records.append(Record(date, time, length, event, note))

def print_all_records():
    for record in records:
        print(record)

def all_records_json():
    ret = [record.__dict__ for record in records]
    return json.dumps(ret)

