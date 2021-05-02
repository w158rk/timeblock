from datetime import datetime,timedelta

current:datetime = None

def set_current(d: datetime.date, t:datetime.time):
    global current
    current = datetime.combine(d, t)

def get_current_date():
    return current.date()

def get_current_time():
    return current.time()

def inc_current(units: int):
    delta = timedelta(minutes=units*30)
    global current
    current += delta