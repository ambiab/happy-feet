from project.utils.client_requests import get_photo_url
from project.settings import FLIRCK_API_KEY 

def get_photo_urls(mountain_ids_names):
   try: 
      fn = lambda (id, name):  (id, get_photo_url(FLIRCK_API_KEY, name))
      resp = list(map(fn, mountain_ids_names[5559:7000]))
      return resp

   except Exception as e:
      print "Failed due to %s " % e
      return

def post_nearest(lat, lng):
      qry = '''WITH subq AS (
            SELECT name, feature, latitude, longitude, SQRT(
                  POW(69.1 * (latitude - %f), 2) +
                  POW(69.1 * (%f - longitude) * COS(latitude / 57.3), 2)) AS distance
            FROM mountains)
      SELECT * FROM subq			
      WHERE distance < 50 
      ORDER BY distance LIMIT 8''' % (lat, lng)

      from sqlalchemy import text
      from project import db
      return db.session.query('name', 'feature', 'latitude', 'longitude', 'distance').from_statement(text(qry)).all()

