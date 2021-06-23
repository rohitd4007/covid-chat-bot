# -*- coding: utf-8 -*-
"""
Created on Tue Jun  1 14:49:06 2021

@author: shubh
"""



from flask import Flask,render_template,request
import ss2
from flask_restful import Api,Resource
app = Flask(__name__)
from flask_cors import CORS
CORS(app)
api=Api(app)

#@app.route('/',methods=['GET','POST'])

class CB(Resource):
    def post(self,inp):
        res=[]
        #inp=request.form.get("input_user")
        res=ss2.chatbot(inp)
        return {"data":res}

api.add_resource(CB, "/<string:inp>")


if __name__ == '__main__':
    por = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=por,threaded=True)
