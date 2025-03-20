FROM node:20.9.0-alpine
COPY . .
CMD ["npm", "start"]
