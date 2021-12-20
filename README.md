# **RepoProvas**


### **About the project**
[view demo](https://kms-repoprovas.vercel.app/)

<br />
<p align="center">
    <img src="https://cdn.discordapp.com/attachments/285125331751534602/922544031718842368/unknown.png" width="250px">
<p>

RepoProvas is a single page application designed with a mobile first approach.

Its objective is to store old college exams. Users can send their old exams anonymously to help other students prepair.

When a user enters the site, he can decide between viewing old exams or submitting a exam. If he decide to see old exams there are a fell filters to easy the search. If he decide to send a exam, there are a form with selects to facilitate the process.

<br />

### **Built with**

- [React JS](https://reactjs.org/)
- [Node JS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

 <br />

## **Getting Started**

### **Prerequisites**

- npm

<br />

### **Installation**

1.  Clone the backend

```sh
git clone https://github.com/Kevinmsouza/RepoProvas-back.git
```

2. Clone the frontend **in another folder**

```sh
git clone https://github.com/Kevinmsouza/RepoProvas-front.git
```

3. Install frontend and dependencies executing command **in both folders**

```sh
npm i
```

4. Create a .env file in backend folder (root) with following variables ( example values )

```sh
DATABASE_URL=postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_DATABASE
PORT=4000
```

5. Create a postgres database and fill .env with database credentials

   <br />

6. Run (copy & paste) the dump.sql statements in database
   <br />
   <br />

### **How to run**

1. Start backend server

```sh
npm run start
```

2. Start frontend

```sh
npm start
```
