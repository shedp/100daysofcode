from flask import Flask, request, jsonify, make_response, render_template, session;
#  this is importing JWT; we want PyJWT
import jwt 
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = "1*\xff\xed\xa8\x95Q\x15^\x8e\x1c\xbb"

def token_required(function):
    @wraps(function)
    def decorated(*args, **kwargs):
        token = request/args.get('token')
        if not token:
            return jsonify({"Alert!":"Token is missing!"})
        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({"Alert!": "Invalid Token!"})
    return decorated

# public
@app.route('/public')
def public():
    return 'For Public'

# authenticated
@app.route('/auth')
@token_required
def auth():
    return "KWT verified. Welcome to Your dashboard"

@app.route('/')
def home():
    if not session.get("logged_in"):
        return render_template('login.html')
    else:
        return "Logged in currently"
    
@app.route('/login', methods=['POST'])
def login():
    if request.form["username"] and request.form["password"] == 'password123':
        session["logged_in"] = True
        token = jwt.encoded({
            "user": request.form["username"],
            "expiration:": str(datetime.utcnow() + timedelta(seconds=120))
        },
            app.config['SECRET_KEY'])
        return jsonify({"@token": token.decode('utf-8')})
    else:
        return make_response("Unable to verify", 403, {"WWW-Authenticate": 'Basic realm:"Authentication failed"'})

if __name__ == "__main__":
    app.run(debug=True)