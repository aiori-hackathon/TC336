# # Stage 1: Build React App
# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine

# # Nginx config copy karo
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Build ki hui files copy karo
# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Nginx nahi, Vite dev server chalega
CMD ["npm", "run", "dev", "--", "--host"]