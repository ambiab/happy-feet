import os
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv(dotenv_path=os.path.join(BASE_DIR, ".env"))

GEOCODING_API_KEY = os.getenv('GEOCODING_API_KEY')
FLIRCK_API_KEY = os.getenv('FLIRCK_API_KEY')
DATABASE_URL = os.getenv('DATABASE_URL')