# I'm using base images nginx with latest version 
FROM nginx:latest

# Copy Files and Directories into the container to be served by Nginx
COPY .  /usr/share/nginx/html/

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start the Nginx server when the container is run
CMD ["nginx", "-g", "daemon off;"]

