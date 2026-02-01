FROM node:18

WORKDIR /app

COPY package.json /app/

RUN npm install 

COPY . .

EXPOSE 4444

CMD ["npm" , "run" , "prod"]