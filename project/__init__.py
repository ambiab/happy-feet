# project/__init__.py
from flask import Flask, render_template, make_response
from flask_sqlalchemy import SQLAlchemy
import os
import project.settings

db = SQLAlchemy()

def create_app(config_filename=None):
   print 'Creating application with filename %s' % config_filename
   app = Flask(__name__, instance_relative_config=True)
   app.config.from_pyfile(config_filename)
   initialize_extensions(app)
   return app

def initialize_extensions(app):
   print 'Initialise extension for: %s' % app
   
    # Since the application instance is now created, pass it to each Flask
    # extension instance to bind it to the Flask application instance (app)
   db.init_app(app)
   