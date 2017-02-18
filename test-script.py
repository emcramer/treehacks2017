# Test script 
from flask import Flask, request, redirect
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/displayurl', methods=['POST'])
def displayURL():
    url =  request.args.get();
    print(url);
    return redirect('/');

if __name__ == '__main__':
    app.run()