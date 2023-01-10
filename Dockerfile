#image de base à utiliser
FROM node:18-alpine

#directory à utiliser pour copier les sources
WORKDIR /
COPY ./ ./

#on affiche le contenu du directory pour contrôle
RUN ls -a

#on install l'app avec la commande npm intégrée
RUN npm install

#on build l'app
RUN npm run build

#on ouvre un port sur le docker
EXPOSE 3000

#on lance la commande npm run start qui devient la commande par defaut du conteneur
CMD [ "npm", "run", "start" ]