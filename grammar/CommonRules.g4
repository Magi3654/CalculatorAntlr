lexer grammar CommonRules;

ID          :       [a-zA-Z]+ ;
INT         :       [0-9]+ ;
NEWLINE     :       '\r'? '\n' ; 
SPACES      :       [ \t\r\n]+ -> skip ;

MUL         :       '*' ;
DIV         :       '/' ;
ADD         :       '+' ;
SUB         :       '-' ;