<h1 align = "center">Simple Sveltekit App with MongoDB and TypeScript</h1>
<p><a href = "https://chess-platform.onrender.com/">Live Demo</a> (The site may open slowly because I deployed the project to a free render account)</p>

<h3>Table of Contents</h3>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#installation--setup">Installation & Setup</a></li>
</ul>

<h3>Introduction</h3>
<p>The main purpose of this project is to learn how to use MongoDB with Sveltekit so it is very simple and detailed with comments.   
I used MongoDB Atlas for the database and Nodemailer for the contact form.</p> 
<img src="https://i.ibb.co/gtctgXY/sveltekit-mongodb-banner.jpg" alt="sveltekit-mongodb" border="0">

<h3>Features</h3>

- Realtime Pagination and Search
- Contact with Nodemailer

<h3>Installation & Setup</h3>

1. Clone the repository
```bash
git clone https://github.com/bberkay/sveltekit-mongodb.git
```
2. Navigate to the project directory and install the dependencies
```bash
cd sveltekit-mongodb
npm install
```
3. Create a .env file like <a href ="https://github.com/bberkay/sveltekit-mongodb/blob/main/.env.example">this</a> in the root directory and add the following variables
```bash
MAIL_HOST = <your_host>
MAIL_PORT = <your_port>
MAIL_USERNAME = <your_username>
MAIL_PASSWORD = <your_password>
MONGO_URL = <your_mongodb_url>
```
4. Run the project
```bash
npm run dev
```

<hr>
<h5 align="center"><a href="mailto:berkaykayaforbusiness@outlook.com">berkaykayaforbusiness@outlook.com</a></h5> 
