# git-express

A web application using github's application programming interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Project Overview

This is a web application that leverages the GitHub Open API to provide users with an enhanced user interface. The application aims to improve the GitHub experience by offering features that are not available in the standard GitHub interface.

## Features

List key features or functionalities of your project.

- You get suggestions to follow users of same interest
- Enhanced UX to see Github profiles

## Getting Started

### Prerequisites

1. Software and tools need to be installed before setting up the project

- Node.js (Version 20.4.0)
- npm (Version 9.7.2 or above)

2. Create `.env.development` from `.env.development.template`

### Installation

1. Clone the repository:

   ```bash
   git clone https://code.jtg.tools/arjun.bhatt/git-express.git
   ```

2. Navigate to the project directory:

   ```
   cd git-express
   ```

3. Start the development server:

   ```bash
   nvm install
   nvm use
   npm i
   npm run dev
   ```

## Project Structure

```

project-root/
|- client/
| |- index.js (React entry point)
| |- ...
|
|- src/
| |- controllers/
| | |- ...
| |- middleware/
| | |- ...
| |- models/
| | |- ...
| |- views/
| | |- EJS templates
| |- server.js (Express app entry point)
| |- ...
|
|- package.json
|- ...

```

## Usage

Once the project is set up, you can run the application locally and access it at http://localhost:3000. The application serves both EJS templates and React components.

## Technologies Used

Key technologies and tools used in this project:

- React
- Express
- Node.js
- EJS
- Webpack

## Contributing

Contributions are welcome! To contribute to this project, follow the path of god.
