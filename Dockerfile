# FROM node:12.18.3 AS builder
# ENV NODE_ENV=production
# ENV NUXT_GENERATE_DIR=/app/dist
# WORKDIR /app
# COPY ["app/package.json", "app/yarn.lock", "./"]
# RUN yarn install --silent
# COPY app .
# RUN yarn generate
# CMD ls

FROM node:14.18.3
WORKDIR /app
RUN npm cache clean --force
COPY ["api/package.json", "api/yarn.lock", "./"]
RUN yarn install --production --silent && yarn cache clean
# COPY --from=builder /app/dist dist
COPY api .

EXPOSE 80
CMD npm start
