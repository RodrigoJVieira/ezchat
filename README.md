<h1 align="center" style="color:#DC143C; font-weight:bold;">
     <img 
    src="https://i.ibb.co/SrhSFRY/ezchat.png"
    float="center"
    width="200" height="100"
    />
    <br/>
  <a href="#"> Ezchat </a>
</h1>

<p align="center">
 <a href="#ℹ%EF%B8%8F-about">About</a> •
 <a href="#-tech-stack">Tech Stack</a> •
 <a href="#-how-it-works">How it works</a> •
 <a href="#%EF%B8%8F-endpoints">Endpoints</a> •
 <a href="#-documentation-API">Documentation</a> •
 <a href="#-authors">Authors</a> •
</p>

## ℹ️ About

Chat with [Socket.IO](https://socket.io/) created at [RocketSeat](https://rocketseat.com.br/) Next Level Week 5.0, using stack TypeScript with Node.js.

---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[TypeORM](https://www.npmjs.com/package/typeorm)**
- **[Sqlite3](https://www.npmjs.com/package/sqlite3)**
- **[Metadata Reflection API](https://www.npmjs.com/package/reflect-metadata)**
- **[uuid](https://www.npmjs.com/package/uuid)**
- **[socket.io](https://www.npmjs.com/package/socket.io)**
- **[socket.io-client](https://www.npmjs.com/package/socket.io-client)**
- **[Embedded JavaScript templates](https://www.npmjs.com/package/ejs)**

---

## 🚀 How it works

### 👉 Pre-requisites

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### 🏁 Start

```bash
# Clone this repository
$ git clone https://github.com/BiaChacon/chatty.git

# Access the project folder cmd/terminal
$ cd chatty
```

#### 🎲 Running the server

```bash
# go to the api folder
$ cd api

# install the dependencies
$ npm install

#Create migrations
$ yarn typeorm migration:run

# Run the application
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333

```

---

## 🖥️ Endpoints

### 💠 To access the Admin chat go to 👉 http://localhost:3333/pages/admin

### 💠 To access the Client chat go to 👉 http://localhost:3333/pages/client

---

## 🗎 Documentation API

<details>
  <summary>Settings</summary>

### 📍 Create Settings [/settings] [POST]

#### **Request**

- Body

```bash
{
    "chat": "true",
    "username": "admin"
}
```

#### **Response 201 (application/json)**

```bash
[
  {
    "id": "admin_id",
    "username": "admin",
    "chat": "true",
    "updated_at": "2021-04-22T19:22:37.000Z",
    "created_at": "2021-04-22T19:22:37.000Z"
}
]
```

### 📍 Update Settings [/settings/admin] [PUT]

#### **Request**

- Body

```bash
{
    "chat": "false"
}
```

#### **Response 201**

 </details>

<details>
  <summary>User</summary>

### 📍Create User [/users] [POST]

#### **Request**

- Body

```bash
{
    "email": "example@email.com"
}
```

#### **Response 201 (application/json)**

```bash
[
 {
    "id": "user_id",
    "email": "example@email.com",
    "created_at": "2021-04-22T19:37:24.000Z"
}
]
```

 </details>

<details>
  <summary>Message</summary>

### 📍Send Message [/messages] [POST]

#### **Request**

- Body

```bash
{
    "user_id": "user_id",
    "text": "message"
}
```

#### **Response 201 (application/json)**

```bash
[
  {
    "id": "message_id",
    "text": "message",
    "user_id": "user_id",
    "created_at": "2021-04-23T19:40:02.000Z"
  }
]
```

### 📍List Messages By User [/messages/:user_id] [GET]

#### **Response 201 (application/json)**

```bash
[
  {
    "id": "message_id",
    "admin_id": "admin_id",
    "text": "message",
    "user_id": "user_id",
    "created_at": "2021-04-22T19:40:02.000Z",
    "user": {
      "id": "user_id",
      "email": "example@email.com",
      "created_at": "2021-04-22T19:37:24.000Z"
    }
  }
]
```

</details>

---

## 👩🏽‍💻 Authors

<table>
  <tr>
    <td align="center"><a href="https://github.com/RodrigoJVieira"><img src="https://i.ibb.co/gWFykqN/ezchat.png" width="100px;" alt=""/><br /><sub><b>Rodrigo Vieira</b></sub></a><br /><a href="https://github.com/RodrigoJVieira/ezchat" title="Code">💻</a></td>
  <tr>
</table>

---
