import sys

import getopt, sys
from testform.image_tag.Model.PredictionModel import PredictionModel

def tag_generate(url):
    # url = "https://geographical.co.uk/wp-content/uploads/somalaya-mountain-range-title.jpg"
    predictions = PredictionModel()
    mytags = predictions.computePredictions3(url)
    # print(predictions.m_classRules.getClassInformation())

    print(mytags)
    return mytags

