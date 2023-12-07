FROM node:19.9.0
WORKDIR /app
ADD . .
RUN ["npm", "install"] 
RUN ["npm", "install", "typescript", "-g"]
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]