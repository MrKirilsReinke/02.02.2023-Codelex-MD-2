# React-Components---Base-CRUD-App-with-DB

## Description

A React-based web application for managing a list of singers and their information. This project allows users to add, edit, and delete singer profiles, making it a handy tool for maintaining and organizing singer-related data. It includes features like a user-friendly form for adding new singers, a list of singer profiles with edit and delete options, and a modal window for editing singer details.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To get started with this project, you need to install the required dependencies and run it. Follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

If you're using Visual Studio Code, you can open the project directory with the following command:
```bash
code .
```

3. Open terminal in Visual Studio Code and install the project dependencies using npm.

```bash
npm install
```

4. Run the development server to start the application.

```bash
npm run dev
```

Server should start at following link: 

`http://localhost:5173`

5. To run database, open another terminal and write:

```bash
json-server --watch db.json --port 3004 
```

Database should start at following link: 

`http://localhost:3004`

## Usage

* You can add a new singer by filling in the required details in the form.
* Singer profiles are displayed in the "content-side" with options to edit and delete.
* To edit a singer's information, click the "Edit" button, and a modal window will appear.
* To delete a singer, click the "Delete" button.
* Enjoy managing your singer data with ease!

## Features

* Add new singers with their name, image, and genre.
* View a list of singers with their details.
* Edit singer information using a user-friendly modal winodw.
* Delete singers to remove them from the list.
* Visual feedback using toast notifications for successful actions.
* Loading indicators for a seamless user experience.

## Credits

* React: A JavaScript library for building user interfaces.
* Axios: A popular promise-based HTTP client for making API requests.
* React-toastify: A notification library for displaying toast messages.
* SCSS: A CSS preprocessor for styling the application.

## How to Contribute

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

```bash
git add .
git commit -m "Added a new feature"
```

4. Push your changes to your forked repository.

```bash 
git push origin feature/your-feature-name
```

5. Create a Pull Request (PR) to the main repository, explaining your changes and improvements.
