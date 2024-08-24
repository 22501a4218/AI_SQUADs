from flask import Flask,render_template,request
import pickle
import numpy as np

#create a Flask object
app = Flask(__name__) #Flask application
@app.route('/')
def hello():
    """test function"""
    return "Welcome to PVP College"
#app.run()

#First let's read the pickle file
with open('data.pkl','rb') as f:
    model = pickle.load(f)
@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')
@app.route('/predict',methods=['POST'])
def predict():
    cat = int(request.form['Category'])
    
    #now take the above form data and convert to array
    input_data = np.array([[cat]])
    #by taking above data we will predict the House_price
    prediction = model.predict(input_data)[0]
    #now we will pass above predicted data to template
    return render_template('index.html',
                           prediction = prediction)
app.run()
