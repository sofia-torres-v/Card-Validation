# Tarjeta de crédito válida

## Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](./AlgoritmoLuhn.png)

## Resumen del proyecto

### Validación de Tarjetas de Crédito y Escenario de Agencia de Viajes

La aplicación "Validador de Tarjeta de Crédito" permite a los usuarios ingresar el número de su tarjeta de crédito en el campo provisto. El validador aplica el algoritmo de Luhn para verificar la validez de la tarjeta. Si es válida, se muestra un mensaje de aprobación y se ocultan todos los dígitos, excepto los últimos cuatro. Además, se muestra el logotipo de Visa o MasterCard según la franquicia de la tarjeta.

La interfaz de la aplicación recrea el escenario de una agencia de viajes, brindando a los usuarios una experiencia visual atractiva y realista. 

