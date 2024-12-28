<h1 align = "center">Simple Sveltekit App with MongoDB and TypeScript</h1>
<p>This is <code>svelte-4</code> branch, you can also check <code><a href="https://github.com/bberkay/sveltekit-mongodb/tree/main">main</a></code> branch to see svelte 5 version. <a href = "https://sveltekit-mongodb-svelte-4.vercel.app/">Live Demo</a> (The site may open slowly because I deployed the project to a free vercel account. To avoid problems that may arise due to a slow connection, I recommend that you download the project to your machine and try it.)</p>

<h3>Table of Contents</h3>
<ol>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#installation--setup">Installation & Setup</a></li>
</ol>

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
