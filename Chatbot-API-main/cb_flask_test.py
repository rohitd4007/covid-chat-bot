

from flask import Flask,render_template,request
import ss2
from flask_restful import Api,Resource
app = Flask(__name__,template_folder='C:\\Users\\shubh\\chatbot\\templates')

api=Api(app)

#@app.route('/',methods=['GET','POST'])

class CB(Resource):
    def post(self,inp):
        res=[]
        #inp=request.form.get("input_user")
        res=ss2.chatbot(inp)
        return {"data":res}

api.add_resource(CB, "/xyz/<string:inp>")

if __name__ == '__main__':
    app.run(debug=True,use_reloader=False)