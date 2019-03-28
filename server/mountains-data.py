from ..app import db

class Mountains(db.Model):
   __tablename__ = 'Moutains'

   id = db.Column(db.Integer, primary_key=True),
   name = db.Column(db.String()),
   colheight = db.Column(db.Float()),
   feature = db.Column(db.String()),
   streetmap = db.Column(db.String()),
   geograph = db.Column(db.String()),
   hillbagging = db.Column(db.String()),
   xcoord = db.Column(db.Float()),
   ycoord = db.Column(db.Float()),
   latitude = db.Column(db.Float()),
   longitude = db.Column(db.Float()),
   gridrefxy = db.Column(db.String())

   def __init__(self, name, colheight, feature, streetmap, geograph, hillbagging,
          xcoord, ycoord, latitude, longitude, gridrefxy ):
      self.name = name
      self.colheight = colheight 
      self.feature = feature 
      self.streetmap = streetmap 
      self.geograph = geograph 
      self.hillbagging = hillbagging 
      self.xcoord = xcoord 
      self.ycoord = ycoord 
      self.latitude = latitude 
      self.longitude = longitude 
      self.gridrefxy = gridrefxy 

   def __repr__(self):
      return '<id {}>'.format(self.id)
    
   def serialize(self):
      return {
         'id': self.id, 
         'name': self.name,
         'colheight': self.colheight,
         'feature': self.feature,
         'streetmap': self.streetmap,
         'geograph': self.geograph,
         'hillbagging': self.hillbagging,
         'xcoord': self.xcoord,
         'ycoord': self.ycoord,
         'latitude': self.latitude,
         'longitude': self.longitude,
         'gridrefxy': self.gridrefxy
      }
