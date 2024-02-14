FROM node:20.11.0
WORKDIR app/
ADD . .
RUN ls -al
RUN npm install
CMD npm start
EXPOSE 3000