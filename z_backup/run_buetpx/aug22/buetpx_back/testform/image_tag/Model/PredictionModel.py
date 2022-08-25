from PIL import Image
from transformers import ViTFeatureExtractor, ViTForImageClassification
import requests
from testform.image_tag.Model.ClassRules import ClassRules

class PredictionModel:
    def __init__(self):
        self.m_predictions = []
        self.m_classRules = ClassRules()

        self.m_featureExtractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
        self.m_model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

        #self.m_device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
        #self.m_model.to(self.m_device)

    def computePredictions(self, fileNames):
        print("inside computePredictions:")
        self.m_predictions = []

        for fileName in fileNames:
            with Image.open(fileName) as image:
                inputs = self.m_featureExtractor(images=image, return_tensors="pt")
                outputs = self.m_model(**inputs)
                logits = outputs.logits
                
                predictedClass = logits.argmax().item()
                predictionProbability = logits.softmax(dim=1).max().item() * 100.0

                classNames = self.m_model.config.id2label[predictedClass]
                className = classNames.split(",")[0]
                print("predictedClass:", predictedClass)
                print("className:", className)
                print("classNames:", classNames)
                

                if self.m_classRules.isPredictionValid(className, predictionProbability):
                    information =  self.m_classRules.getClassInformation(className)
                    print("information:", information, "className:", className, "predictionProbability:", predictionProbability)
                    self.m_predictions.append([fileName, information, predictionProbability])
                print("information.m_categories", information.m_categories)
                print("information.m_label", information.m_label)

        return self.m_predictions

    
    # amar lekha : 
    def computePredictions2(self, fileNames):
        print("inside computePredictions:")
        self.m_predictions = []

        for fileName in fileNames:
            with Image.open(fileName) as image:
                inputs = self.m_featureExtractor(images=image, return_tensors="pt")
                outputs = self.m_model(**inputs)
                logits = outputs.logits
                
                predictedClass = logits.argmax().item()
                predictionProbability = logits.softmax(dim=1).max().item() * 100.0

                classNames = self.m_model.config.id2label[predictedClass]
                className = classNames.split(",")[0]
             
                

                if self.m_classRules.isPredictionValid(className, predictionProbability):
                    information =  self.m_classRules.getClassInformation(className)
                    print("information:", information, "className:", className, "predictionProbability:", predictionProbability)
                    self.m_predictions.append([fileName, information, predictionProbability])
                mytags = []
                mytags.append(information.m_label)
                for category in information.m_categories:
                    mytags.append(category)
                print("mytags:", mytags)
                # print("information.m_categories", information.m_categories)
                # print("information.m_label", information.m_label)

        return mytags
    
    def computePredictions3(self, url):
        print("inside computePredictions:")
        self.m_predictions = []

        image = Image.open(requests.get(url, stream=True).raw)
            
        inputs = self.m_featureExtractor(images=image, return_tensors="pt")
        outputs = self.m_model(**inputs)
        logits = outputs.logits
        
        predictedClass = logits.argmax().item()
        predictionProbability = logits.softmax(dim=1).max().item() * 100.0

        classNames = self.m_model.config.id2label[predictedClass]
        className = classNames.split(",")[0]
        
        mytags = []

        if self.m_classRules.isPredictionValid(className, predictionProbability):
            information =  self.m_classRules.getClassInformation(className)
            print("information:", information, "className:", className, "predictionProbability:", predictionProbability)
            self.m_predictions.append([url, information, predictionProbability])
        
            mytags.append(information.m_label)
            for category in information.m_categories:
                mytags.append(category)
            print("mytags:", mytags)
        # print("information.m_categories", information.m_categories)
        # print("information.m_label", information.m_label)

        return mytags
    
    
    
    def getLastPredictions(self):
        return self.m_predictions