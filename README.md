# PUPSCHED

This repository contains the code and resources for the **PUP SANJUAN SCHEDULING SYSTEM**, designed to handle faculty scheduling management at **Polytechnic University of the Philippines - San Juan Campus**.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation](#installation)
5. [Docker](#docker-installation)
6. [Usage](#usage)
7. [Team](#team)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

The PUPSCHED is a Faculty load management system design to ease designatiom of (Room, Section, Date & Time, and Course/Subject with credit monitoring) 

## Technologies Used

- **Frontend:** HTML, CSS, SCSS, Tailwind CSS, JavaScript, React.js
- **Backend:** Laravel
- **Database:** PostGres
- **Authentication:** JWT (JSON Web Token)


## Features

- User authentication for secure access.
- Admin with full CRUD privileges, Faculty with view or read access only. 
- Easy-to-navigate user interface for both admins and users.
- Faculty page is fully responsive to most screen devices available.

## Installation

1. Clone the repository:

    ```bash
    # Clone with HTTPS
    git clone https://https://github.com/1101101011/PUPSCHED.git
    # Clone with SSH
    git clone git@github.com:1101101011/PUPSCHED.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PUPSCHED
    ```

3. Install dependencies for node modules:

    ```bash
    npm install
    ```

4. Install dependencies for composer:

    ```bash
    composer install
    ```

5. Generate Key Encryption for Laravel:

    ```bash
    php artisan key:generate
    ```

6. Copy the `.env.example` file and rename it to `.env`:

    ```bash
    cp .env.example .env
    ```

7. Update the `.env` file with your database credentials:

    ```bash
    DB_USERNAME=your-username (usually postgres)
    DB_PORT=5432
    ```

8. Migrate the project database:

    ```bash
    php artisan migrate
    ```

9. Fresh migrate the project database:

    ```bash
    php artisan migrate:fresh
    ```

10. Seed the project database to populate the tables for users and programs:

    ```bash
    php artisan db:seed
    ```

11. Start the server for laravel:

    ```bash
    composer run dev

    ```

## Docker Installation
> [!NOTE]
> Please ensure you have Docker installed on your machine before proceeding with the Docker installation steps.

1. Clone the repository:

    ```bash
    # Clone with HTTPS
    git clone https://https://github.com/1101101011/PUPSCHED.git
    # Clone with SSH
    git clone git@github.com:1101101011/PUPSCHED.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PUPSCHED
    ```

3. Copy the `.env.example` file and rename it to `.env`:

    ```bash
    cp .env.example .env
    ```
4. Update the `.env` file with your database credentials:

    ```bash
    DB_HOST=postgres (this is the name of the service in docker-compose)
    DB_USERNAME=your-username (usually postgres)
    DB_PORT=5432
    DB_DATABASE=pupsched
    DB_PASSWORD=your-password (this is required for the database connection in docker container)
    ```

5. Build the Docker image with docker-compose:

    ```bash
    docker compose build
    ```
6. Start the Docker containers:

    ```bash
    docker compose up -d
    ```
7. Generate the application key:

    ```bash
    docker exec -it pupsched-app php artisan key:generate
    ```
8. Run the migrations and seed the database:

    ```bash
    docker exec -it pupsched-app php artisan migrate:fresh --seed
    ```
9. Access the application in your web browser at `http://127.0.0.1:8000`.



## Team

- **Justine Bautista** - UI/UX Developer
- **Regie San Juan** - Fullstack Developer
- **Mark Fulguerinas** - Frontend Developer/ Designer
- **Charles Ilarde** - Database Administrator/ Backend Developer
- **Jesse Mari Mirabel** - Frontend Developer/ Designer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
