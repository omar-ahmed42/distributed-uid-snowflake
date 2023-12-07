FROM node:19.9.0
WORKDIR /app
ADD . .
RUN ["npm", "install"]
RUN ["tsc"]
CMD ["node ./dist/app.js"]