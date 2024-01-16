FROM node:18-alpine
WORKDIR /frontend/
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/
RUN npm install
#RUN apt-get update && apt-get install -y curl
CMD ["npm", "start"]