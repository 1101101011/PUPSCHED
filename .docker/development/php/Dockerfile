FROM php:8.4-cli

#install dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libpng-dev \
    && docker-php-ext-install pdo pdo_pgsql bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY ./ /app

CMD sh -c "composer install && php artisan serve --host=0.0.0.0 --port=8000"
