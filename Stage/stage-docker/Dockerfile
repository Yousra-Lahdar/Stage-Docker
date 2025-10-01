# Utilise une image Node officielle
FROM node:18

# Crée le dossier de l'application dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json (si présent)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers
COPY . .

# Indique le port que l'app utilise
EXPOSE 3000

# Commande pour démarrer l'app
CMD ["npm", "start"]
