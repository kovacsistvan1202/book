ARG NODE_VERSION=20

# Stage 1: Build the application
FROM node:${NODE_VERSION}-alpine as build-stage

ENV NODE_ENV=production

RUN apk add shadow
RUN groupadd -r customgroup && useradd -r -g customgroup customuser
ENV HOME /home/customuser
RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

WORKDIR $HOME/app

RUN chown -R customuser:customgroup $HOME/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

USER customuser

# Stage 2: Create the final image
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production

RUN apk add shadow
RUN groupadd -r customgroup && useradd -r -g customgroup customuser
ENV HOME /home/customuser
RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

WORKDIR $HOME/app

RUN chown -R customuser:customgroup $HOME/app

# Copy built application from the build stage
COPY --from=build-stage $HOME/app ./

CMD ["npm", "start"]
