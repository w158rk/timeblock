from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class Handler(FileSystemEventHandler): 
    def __init__(self, callback=None):
        super(Handler, self).__init__()
        self.callback = callback

    def on_modified(self, event):
        super(Handler, self).on_modified(self)
        if self.callback:
            self.callback()


def observe(path='', callback=None):
    handler = Handler(callback)
    ob = Observer()
    ob.schedule(handler, path)
    return ob