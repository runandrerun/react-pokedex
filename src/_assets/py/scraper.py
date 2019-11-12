import cv2
import numpy as np
import urllib.request
import time

start_time = time.time()
for i in range(1, 801):
    try:
        req = urllib.request.Request(
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + '{:03d}'.format(i) + '.png')
        response = urllib.request.urlopen(req)
        rr = response.read()
        ba = bytearray(rr)
        image = np.asarray(ba, dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)
        path = 'pokemon/data/'
        cv2.imwrite(path + '{:01d}'.format(i) + ".png", image)
        print("Saved " + '{:01d}'.format(i) + ".png")
    except Exception as e:
        print("Error Occured for Pokemon " + '{:01d}'.format(i))
        print(str(e))
