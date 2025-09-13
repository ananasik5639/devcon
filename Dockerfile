# Using official iso Node.js on ОС Alpine with name "builder"
FROM node:18-alpine AS builder

# Create work directory
WORKDIR /app

# Copy only (package.json и package-lock.json)
# Make Docker cash 
COPY package*.json ./

RUN npm ci 

# Copy other code to container
COPY . .

# Run our app and Vite would create new file /app/dist
RUN npm run build

# =============================================================================
# Create new clear iso
# Without Node.js code
# =============================================================================

# Use nginx
FROM nginx:latest

# Copy files from /app/dist into nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy config file for nginx .
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 
EXPOSE 80


# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]