# cinepolis
Recreación cinepolis ejemplo proporcionado por el ingeniero
Para demostrar el uso correcto de GitHub


#### LIDER
~~~~ 
#Detectar la rama inicial
  git checkout Master
#Crear rama donde creare todos mis cambios
  git checkout -b teamX-1
#cambios
  cambio pequeño para diferenciar de Master
#pasos dentro del repositorio LOCAL
  git add .
  git commit -m “todos mis cambios”
  git push origin teamX-1
~~~~


#### EQUIPO
~~~~ 
#Detectar la rama inicial
  git checkout teamX-1
#Crear rama donde todos mis cambios
  git checkout -b ape_feat
#cambios (realiza los cambios a programar)
#pasos dentro del repositorio LOCAL
  git add .
  git commit -m “todos mis cambios” (Agregar mensaje descriptivo)
  git push origin ape_feat
~~~~ 


#### Pasos antes de solicitar un Pull Request/ hacer Merge

~~~~ 
#Subir todos mis cambios locales al repositorio
  git add .
  git commit -m “todos mis cambios” (Agregar mensaje descriptivo)
  git push origin ape_feat
#Cambiarte a rama inicial
  git checkout teamX-1
#jalar todos los cambios de esa rama
  git pull
#cambiar de nuevo a la rama sobre la cual estoy trabajando
  git checkout ape_feat
#mezclar cambios de la rama inicial a mi rama y resolver conflictos
  git merge teamX-1
#subir cambios a mi rama
  git commit
  git push origin ape_feat
#Unir mis cambios con TeamX-1
  git checkout teamX-1
  git pull
  git merge ape_feat
~~~~ 
