FROM php:8.4

#install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    openssl

# Install PHP extensions
RUN docker-php-ext-install \
    bcmath \
    pdo \
    pdo_pgsql \
    mbstring \
    exif \
    pcntl \
    gd \
    zip \
    opcache \
    mysqli \
    intl \
    xml

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js and npm
COPY --from=node:24.3 /usr/local/bin/node /usr/local/bin/node

WORKDIR /app

COPY . /app

RUN composer install \
    && npm install \
    && php artisan key:generate

EXPOSE 8000

CMD composer run dev
