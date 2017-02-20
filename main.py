import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
    	self.response.headers.add_header('Access-Control-Allow-Origin', '*')
    	self.response.headers['Content-Type'] = 'application/json'
        self.response.write('Hello, World!');
    def post(self):
    	self.response.headers.add_header('Access-Control-Allow-Origin', '*')
    	self.response.headers['Content-Type'] = 'application/json'
     	stuff = self.request.get('data');
     	self.response.write('We are analyzing that article, homie');
     	self.response.write(data);

app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
