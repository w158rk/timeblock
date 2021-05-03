grammar TimeBlock;

// lex

Event: 'event'; 

ID: [A-Z][a-z0-9]*;

Line: '-';

Hex6: [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F];

Digit: [0-9];

String: '"' (Esc | ~["\\])* '"';

fragment Esc : '\\' (["\\/bfnrt]) ;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines, \r (Windows)

// grammar

desc: event* record*;

event: Event eventname color?;

eventname: ID (':' ID)*;

record: date? time? length eventname note?;

date: digit4 Line digit2 Line digit2;

time: digit2 ':' digit2;

length: integer;

note: String;

color: Hex6;

digit4: Digit Digit Digit Digit;

digit2: Digit Digit;

integer: Digit +;