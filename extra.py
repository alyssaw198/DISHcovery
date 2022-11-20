from bs4 import BeautifulSoup
import os
print("PATH: " + os.getcwd())

with open("C:/Users/alyss/Desktop/CODING/CodeJam/allingredients.html", "r") as html_file:
    content = html_file.read()

    soupObj = BeautifulSoup(content, "lxml")

    #grab all tags "item-name"
    foods = soupObj.find_all('span', class_='ingredient-checkbox-label')
    foodarray = []
    for food in foods:
        foodarray.append(food.text)


    fobj = open("themes.txt", "w")
    for index,theme in enumerate(foodarray):
        if index == 0:
            fobj.write("\"" + theme+ "\"" + '\n')
        else:
            fobj.write(",\"" + theme+ "\"" + '\n')
    fobj.close()




