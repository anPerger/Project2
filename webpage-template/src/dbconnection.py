from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
import json
from bson import json_util
# import scraper

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/Endangered_Species")

# Route to render index.html template using data from Mongo


@app.route("/api/population")
def population():
    # Find one record of data from the mongo database
    displayed_data = mongo.db.population.find()
    states = []
    for state in list(displayed_data):
        json_state = json.loads(json.dumps(state, default=json_util.default))
        states.append(json_state)

    # Return template and data
    return {"pop_data": states}


@app.route("/api/birds")
def birds():
    # Find one record of data from the mongo database
    displayed_birds = mongo.db.birds.find()
    birds = []
    for bird in list(displayed_birds):
        json_bird = json.loads(json.dumps(bird, default=json_util.default))
        birds.append(json_bird)

    # Return template and data
    return {"bird_data": birds}


@app.route("/api/plants")
def plants():
    # Find one record of data from the mongo database
    displayed_plants = mongo.db.plants.find()
    plants = []
    for plant in list(displayed_plants):
        json_plant = json.loads(json.dumps(plant, default=json_util.default))
        plants.append(json_plant)

    # Return template and data
    return {"plant_data": plants}


@app.route("/")
def home():
    return render_template("index.html")
