# timeblock

A web application to record your life in a text editor way

---------------------------------------------------

## Platform

Currently, only linux is supported

---------------------------------------------------

## Screenshot
![img](docs/screenshot.png)

It is generated from the following file

```
event Sport:Run E5F4E3
event Study DFB9DF

2021-05-02 07:00 1 Sport:Run
"abcdefg"

3 Sport:Run
"note2"

5 Study
"note2"

```

---------------------------------------------------

## Based on:
### Front end
* React
* Redux
* Hooks

### Back end
* flask
* antlr 4

------------------------------------------------------

## Before build

1. install [nodejs and npm](https://nodejs.org/zh-cn/)
2. install [python3](https://www.python.org/) and [pip3](https://pypi.org/)
3. download [antlr 4](https://www.antlr.org/) to directory `bin`
```
timeblock/
   |
   +---bin/
        |
        +---antlr-4.9.2-complete.jar
```
4. run `pip3 install flask watchdog antlr4-python3-runtime`

## Build
4. run `make build`

## Deploy
5. run `make deploy`

## Run
6. run `python3 -m timeblock`
7. Then you can visit `http://127.0.0.1:5000`

