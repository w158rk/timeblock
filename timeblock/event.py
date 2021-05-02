
import json

DEFAULT_COLOR='246845'
events = {}

class Event:
    def __init__(self, name, color=None):
        self.name = name 
        self.color = color
    
    def __repr__(self):
        return "".join(['event(', self.name, ', ', self.color, ')'])

def add_event(name, color=None) -> None:
    """
    and name and all its prefixes into the event list
    """

    if not name:
        return

    if name in events:
        return

    if not color:
        color = DEFAULT_COLOR
    
    words = name.split(':')

    # if parent
    parent = ':'.join(words[:-1])
    if parent:
        add_event(parent, color)
        color = events[parent].color
    
    events[name] = Event(name, color)


def get_event(name):
    return events[name]

def print_all_events():
    for _,v in events.items():
        print(v)

def all_events_json():
    ret = [v.__dict__ for _,v in events.items()]
    return json.dumps(ret)
