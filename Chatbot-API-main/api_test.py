# -*- coding: utf-8 -*-
"""
Created on Wed Jun  9 16:19:55 2021

@author: shubh
"""

import requests

BASE="http://127.0.0.1:5000/"

response=requests.post(BASE+"xyz/how covid works")

print(response.json())