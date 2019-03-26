import requests

# API_KEY = 'AIzaSyDqWUawbCB2U4a501SduK0I60em_QSIWYc'
GEOCODING_API_KEY = 'AIzaSyDu0t9vgP1OFQ90wJck2BQtGoMZIKVE4d0'

def get_code_address(apiKey, address):
   url = ('https://maps.googleapis.com/maps/api/geocode/json?address={}&key={}'
           .format(address.replace(' ','+'), apiKey))

   try:
        response = requests.get(url)
        resp_json_payload = response.json()
        lat = resp_json_payload['results'][0]['geometry']['location']['lat']
        lng = resp_json_payload['results'][0]['geometry']['location']['lng']

   except Exception, ex:
        print('ERROR: {},\n{}'.format(address, ex))
        lat = 0
        lng = 0

   return lat, lng

if __name__ == '__main__':
   # get key
   # fname = '/Desktop/GoogleMapsAPIKey.txt'
   # file  = open(fname, 'r')
   # apiKey = file.read()

   # get coordinates 
   address = 'flat 304, Viotti Heights, Sandy Hill road, London'
   lat, lng = get_code_address(GEOCODING_API_KEY, address)
   print('{} Coordinates:\nLatitude:  {}\nLongitude: {}'.format(address,lat, lng))
