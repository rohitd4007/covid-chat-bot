# -*- coding: utf-8 -*-
"""
Created on Tue May 25 21:48:08 2021

@author: shubh
"""
import pandas as pd
import numpy as np
import random
dataset=pd.read_csv('covid_19faq1.csv')
import re


X=dataset.iloc[:,0]
y=dataset.iloc[:,1]

X_o=[]
for i in X:
    i=str(i).lower()
    i=str(i.replace('?',''))
    i = re.sub(r"\d+", "", i)
        
    X_o.append(i)
    
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
ps = PorterStemmer()
    
import nltk

#nltk.download('punkt')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
sw = stopwords.words('english') 

def get_response(inp):
    sent=str(inp)
    
    sent=str(sent.replace('?',''))
    
    X_o.append(sent)
    
    X_new=X_o
    words_tokens=[]
    for row1 in X_new:
        words = word_tokenize(row1)
        words_tokens.append(words)
    #print(words_tokens)
    
    
    #words_tokens = {w for w in words_tokens if not w in sw} 
    
    
    
    X_stem=[]
    for word in words_tokens:
        temp=[]
        for word1 in word:
            #if word1 not in sw:
            temp.append(lemmatizer.lemmatize(word1))
        X_stem.append(temp)
        
    
    from sklearn.feature_extraction.text import CountVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    
    X_stem = ["<some_space>".join(x) for x in X_stem]
    
    vectorizer = CountVectorizer(tokenizer = lambda x: x.split("<some_space>"), analyzer="word")
    
    c_matrix=vectorizer.fit_transform(X_stem)
    
    #print("Count Matrix:", c_matrix.toarray())
    
    cosine_sim = cosine_similarity(c_matrix)
    
    
    answers = list((cosine_sim[-1]))
        
    answers.pop()
        
        #max1=max(answers)
    answers=pd.Series(answers)
        
    final=pd.merge(pd.DataFrame(answers),pd.DataFrame(y), right_index = True,left_index = True)
        
        #lst=''
    xyz= max(final[0])
        
        #ind=final(final[0]==xyz).index.values
    if xyz>0.25:
        ind=pd.Index(final[0])
        #ind=ind.astype(int)
        index=ind.get_loc(xyz)
        
        
        out=[]
        out.append(final._get_value(index,1,takeable=True))
        
        out=list(out)
        if type(out[0])!=str:
            return(out[0][0])
        else:
            return(out[0])
    else:
        return("Sorry, not have that info at the moment")
    
    
def chatbot(inp):
    greetings = ['hey', 'hello', 'hi', "it's great to see you", 'nice to see you', 'good to see you','what\'s up','what is your name']
    bye = ['Bye', 'Bye-Bye', 'Goodbye', 'Have a good day','Stop']
    thank_you = ['thanks', 'thank you', 'thanks a bunch', 'thanks a lot.', 'thank you very much', 'thanks so much', 'thank you so much','okay']
    thank_response = ['You\'re welcome.' , 'No problem.', 'No worries.', ' My pleasure.' , 'It was the least I could do.', 'Glad to help.']
    # Example of how bot match the keyword from Greetings and reply accordingly
    
    #print("Hi, I'm Sova. Want some info about Covid-19? (Type bye to exit)")
    Flag= True
    while(Flag==True):
        question=inp
        if question.lower() !='bye':
            if(question.lower() in greetings):
                return (random.choice(greetings))
            elif(question.lower() in thank_you):
                return (random.choice(thank_response))
            else:
                answer=get_response(question.lower())
                return(answer)
            #print(answer)question.lower() =='bye':
        else:
            return(random.choice(bye))
            Flag=False
            
        
        

#get_response('wallahi bruda')
#chatbot()

def cb():
    print("Hi, I'm Sova. Want some info about Covid-19? (Type bye to exit)")
    Flag= True
    while(Flag==True):
        question=input()
        answer=chatbot(question)
        print(answer)
        if question.lower()=='bye':
            Flag=False
#cb()
