grammar TimeBlock;

desc: event* record*;

event: EVENT eventname color?;

eventname: ID (':' ID)*;

record: date? time? length eventname note?;

date: DIGIT4 LINE DIGIT2 LINE DIGIT2;

time: DIGIT2 ':' DIGIT2;

length: DIGIT+;

note: STRING;

color: HEX6;

EVENT: 'event'; 
ID: [A-Z][a-z0-9]*;
LINE: '-';
HEX6: [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F];
DIGIT4: [0-9] [0-9] [0-9] [0-9];
DIGIT2: [0-9] [0-9];
DIGIT: [0-9];
STRING: '"' (ESC | ~["\\])* '"';
fragment ESC : '\\' (["\\/bfnrt]) ;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines, \r (Windows)
