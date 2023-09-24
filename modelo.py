import json
from flask import Flask, request
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from flask_cors import CORS

"""
1 50-99
2 100-199
3 200-499
4 500-999
5 1000-9999
6 10000-99999
7 100000-199999
8 200000-499999
9 500000-999999
10 1000000-1999999
11 2000000-2999999
12 3000000-3999999
13 4000000-4999999
14 5000000-5999999
15 10000000-50000000

1 Preservación de Capital
2 Conservador
3 Moderado
4 Balanceado
5 Crecimiento

1 corto plazo
2 mediano plazo
3 largo plazo 

1 muy bajo
2 bajo
3 intermedio
4 moderado alto
5 alto
6 muy alto

1 crecer ahorros
2 crecer ahorros de forma digital
3 premio adicional por permanencia
4 estabilidad y mejor resguardo del valor del peso respecto al dolar
5 inversion internacional
6 rendimiento superir a la deuda gubernamental
7 diversificar y hacer crecer sus inversiones
8 diversificar sus inversiones para obtener mayores rendimientos
9 invertir en la bolsa mexicana

1 CETE (NTECT)
2 DIGITAL (NTEDIG)
3 PLAZO (NTEPZO)
4 Dolares (NTEDLS)
5 DOLARES+ (NTDLS+)
6 ESTRATEGIA (NTED)
7 ESTRATEGIA (NTE1)
8 ESTRATEGIA (NTE2)
9 ESTRATEGIA (NTE3)

"""

cliente = np.array([(1,1,1,1,1), (1,1,1,1,2), (2,1,1,1,3), (1,1,2,2,4), 
(1,2,3,3,5), (1,2,2,3,6), (1,2,2,4,7), (1,3,3,5,7), (1,4,3,5,8),(1,5,3,6,9),

(1,1,1,1,9),(1,1,2,2,1),(1,2,2,3,1),(1,4,3,5,2),(1,5,2,4,3),(1,3,2,1,6),
(1,3,3,4,9),(1,3,2,5,8),(1,1,2,5,1),(1,3,3,1,4),(1,2,3,5,5),(1,3,3,6,8)], dtype=float)


planes = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 6, 6, 10, 6,  2, 10, 10, 10,4,5,10], dtype=float)

#capa = tf.keras.layers.Dense(units=1, input_shape=[1])
#modelo = tf.keras.Sequential([capa])

oculta1 = tf.keras.layers.Dense(units=3, input_shape=[5])
oculta2 = tf.keras.layers.Dense(units=3)
salida = tf.keras.layers.Dense(units=1)
modelo = tf.keras.Sequential([oculta1, oculta2, salida])

modelo.compile(
    optimizer=tf.keras.optimizers.Adam(0.1),
    loss='mean_squared_error'
)

print("Comenzando entrenamiento...")
historial = modelo.fit(cliente, planes, epochs=3000, verbose=False)
print("Modelo entrenado!")


plt.xlabel("# Epoca")
plt.ylabel("Magnitud de pérdida")
plt.plot(historial.history["loss"])

# print("Hagamos una predicción!")
# resultado = modelo.predict([(1,3,3,6,8)])
# print("este es tu plan idela " + str(resultado) )

# print("Variables internas del modelo")
# #print(capa.get_weights())
# print(oculta1.get_weights())
# print(oculta2.get_weights())
# print(salida.get_weights())

app = Flask(__name__)
CORS(app)


# cada request nos dice la posicion en el siguiente step.
@app.route('/index')

def index():
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    num3 = request.args.get('num3')
    num4 = request.args.get('num4')
    resultado = modelo.predict([(1,int(num1),int(num2),int(num3),int(num4))])
    diccionario = {"res": str(resultado[0][0])}


    # no todos los valores de id son numeros entonces hay que serializarlo
    serialized_data = json.dumps(diccionario)
    return serialized_data

app.run()