FROM node:3.7-alpine
WORKDIR /project
COPY requirements.txt requirements.txt
RUN npm install -r requirements.txt
EXPOSE 3000
COPY main.js main.js
CMD node main.js
