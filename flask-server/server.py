
from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return {
    'data': 'Hello World!'
}

if __name__ == '__main__':
    app.run(debug=True)
