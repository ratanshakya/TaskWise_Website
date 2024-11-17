
# Set Up a Virtualized Environment Using Docker 

## Step 1: Log in to Your VM
Access your VM using SSH. (This example assumes you are using Google Cloud Platform (GCP)).
Replace any necessary credentials to log in to your VM.

![Screenshot 2024-11-17 093621](https://github.com/user-attachments/assets/3a555799-f45d-43dc-b0e6-edbdd33d6837)

## Step 2: Switch to Root User
For elevated permissions, switch to the root user.
```
sudo su
```
![Screenshot 2024-11-17 094444](https://github.com/user-attachments/assets/e764f8c9-8b43-4cea-8f7c-e9b31260d254)

## Step 3: Check if Docker is Installed
Verify if Docker is already installed on your system:
If Docker is not installed, proceed to install it.

![Screenshot 2024-11-17 094816](https://github.com/user-attachments/assets/a2837869-dd03-4134-a711-b63793925e80)

## Step 4: Install Docker
Install prerequisite packages:
```
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
```
![Screenshot 2024-11-17 095532](https://github.com/user-attachments/assets/295c42ec-caae-44af-9c31-5b009eca24be)

Add Docker's official GPG key:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
![Screenshot 2024-11-17 095831](https://github.com/user-attachments/assets/83c3c95c-24c2-41c7-8a1e-0ae836c79b65)


Add Docker's stable repository:
```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
![Screenshot 2024-11-17 100021](https://github.com/user-attachments/assets/84148da3-ada0-418e-8e34-78a2794daeb3)


Install Docker Engine:
```
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```
![Screenshot 2024-11-17 100223](https://github.com/user-attachments/assets/b4d3d017-7141-49ca-b1d1-7eaef9b92267)


Verify Docker Installation:
```
docker --version
```
![Screenshot 2024-11-17 100333](https://github.com/user-attachments/assets/0472691e-6608-43ae-bb08-bf45d1f049ec)

Start Docker Engine:
```
systemctl start docker
systemctl status docker
```
![Screenshot 2024-11-17 100530](https://github.com/user-attachments/assets/0d729deb-a09c-41db-a755-e04a7b446e66)

## Step 5: Clone Your Website Code
Clone your GitHub repository:
```
git clone https://github.com/ratanshakya/TaskWise_Website.git

```
![Screenshot 2024-11-17 104453](https://github.com/user-attachments/assets/0451e42d-29af-4ba7-bd19-9e143f0ccac0)

Navigate to the project directory:
```
cd TaskWise_Website
```
![Screenshot 2024-11-17 120800](https://github.com/user-attachments/assets/d05cc8b7-bc7d-4702-87f5-93695f1de2af)

## Step 6: Create a Dockerfile
Create a Dockerfile:
```
ls
vim Dockerfile

```
![Screenshot 2024-11-17 104842](https://github.com/user-attachments/assets/9a263abc-369a-48f3-9c44-d60c9c2a148b)


### Write the following content in the Dockerfile:
```
# Use the latest Nginx base image
FROM nginx:latest
# Copy website files to Nginx's default serving directory
COPY . /usr/share/nginx/html/
# Expose port 80 for the web server
EXPOSE 80
# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
```
![Screenshot 2024-11-17 105538](https://github.com/user-attachments/assets/ccc3db82-ec53-45d8-ab9c-106f50b5fac1)

Save and exit the file.


## Step 7: Build a Docker Image
Build the Docker image:
```
docker build -t taskwiz .
```
![Screenshot 2024-11-17 121655](https://github.com/user-attachments/assets/d86e11d9-f455-4212-a3dd-71828ddb0bf6)


Verify the image was created:
```
docker images
```
![Screenshot 2024-11-17 121742](https://github.com/user-attachments/assets/82abe1ba-dfa2-4880-876b-bc8fb9975238)


## Step 8: Run a Docker Container
Create and run a container, exposing port 8000:
```
docker run -dit -p 8000:80 taskwiz
```
![Screenshot 2024-11-17 121841](https://github.com/user-attachments/assets/38d4ea00-a37d-4868-90a7-f5b1b01536e5)

Check running containers:
```
docker ps
```
![Screenshot 2024-11-17 121911](https://github.com/user-attachments/assets/39509447-88e9-4971-be97-43b190bb5cd5)

## Step 9: Configure Firewall
Ensure port 8000 is open in your VM's firewall:

 Add a firewall rule in your cloud provider (e.g., GCP):

Open your VM instance settings in the GCP console.

Edit the firewall rules to allow traffic on port 8000 (TCP).

![Screenshot 2024-11-17 111705](https://github.com/user-attachments/assets/b2b2f257-59d2-4449-830c-7be178b7d7a1)

![Screenshot 2024-11-17 111854](https://github.com/user-attachments/assets/2dd2a366-e321-449f-89c9-84b9f8b96b75)


## Step 10: Test Your Deployment
Open a browser.

Enter your VM's public IP and port 8000 in the URL bar:
vbnet

Copy code
http://<your-vm-public-ip>:8000

Example:
http://104.197.36.175:8000

![Screenshot 2024-11-17 111121](https://github.com/user-attachments/assets/ecb3f496-8af9-4e2a-93a1-fd0e568d4949)


If everything is configured correctly, your website should be live.















