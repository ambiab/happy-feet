import requests
from pprint import pprint

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

def get_photo_url(apiKey, name):
        url = ('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={}&text={}&tags=mountain&format=json&nojsoncallback=1'
           .format(apiKey, name))

        try:
                response = requests.get(url)
                resp_json_payload = response.json()
                allPhotos = resp_json_payload['photos']['photo']

                if allPhotos:
                        imageData = resp_json_payload['photos']['photo'][0]
                        farmId = imageData['farm']
                        serverId = imageData['server']
                        imageId = imageData['id']
                        secret = imageData['secret']
                        return 'https://farm{}.staticflickr.com/{}/{}_{}.jpg'.format(farmId, serverId, imageId, secret)

        except Exception as e:
            print e
            
        return ''


if __name__ == '__main__':
   # get key
   # fname = '/Desktop/GoogleMapsAPIKey.txt'
   # file  = open(fname, 'r')
   # apiKey = file.read()

   # get coordinates 
   address = 'flat 304, Viotti Heights, Sandy Hill road, London'
   lat, lng = get_code_address(GEOCODING_API_KEY, address)
   print('{} Coordinates:\nLatitude:  {}\nLongitude: {}'.format(address,lat, lng))
