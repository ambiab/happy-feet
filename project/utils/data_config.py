from project.utils.client_requests import get_photo_url
from project.settings import FLIRCK_API_KEY 

def get_photo_urls(mountain_ids_names):
   try: 
      fn = lambda (id, name):  (id, get_photo_url(FLIRCK_API_KEY, name))
      resp = list(map(fn, mountain_ids_names))
      return resp

   except Exception as e:
      print "Failed due to %s " % e
      return

def get_something_else():
   pass
