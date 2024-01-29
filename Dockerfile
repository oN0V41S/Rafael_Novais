FROM node
WORKDIR /usr/rafaaelnovais-port
RUN npm install
COPY . .
EXPOSE 3131
USER node
CMD ["npm", "start"]
