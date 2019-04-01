import unittest
import project.utils.data_config as data_config
import mock

class DataConfigTest(unittest.TestCase):


    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_response_to_url(self):

        mockPlaces = [(001, 'place1'), (002, 'place2')]
        expected = [(001, 'http://my.img'), (002, 'http://my.img')]
        
        with mock.patch('project.utils.data_config.get_photo_url', return_value="http://my.img"):
            actual = data_config.get_photo_urls(mockPlaces)

        self.assertEqual(expected, actual)    
      # 
      # 