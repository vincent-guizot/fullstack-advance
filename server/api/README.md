# Langkah langkah pembuatan API

1. `npm init -y`

- untuk membuat package.json, package.json berfungsi untuk menyimpan informasi package/modul dalam aplikasi kita.
- NPM = node package manager

2.  `npm install <package_name>`

- untuk menginstall modul dari npm
- npm install express nodemon pg sequelize

3. Membuat file _app.js_ dan _.gitignore_

- _.gitignore_ berfungsi untuk tidak memasukkan _node_modules_ ke dalam GitHub repository

4. Membuat \_routing dan controllers\_\_

5. `npx nodemon app.js`

- untuk menjalankan

# Konfigurasi Postgres menggunakan Sequelize

1. `npx sequelize-cli init`

- untuk membuat initiation awal sequelize

2. Konfigurasi database di dalam _config.json_

3. `npx sequelize-cli db:create`

- untuk membuat database lewat sequelize tanpa query manual

4. `npx sequelize-cli model:generate --name Todo --attributes task:string,status:string`

- untuk membuat class dan juga migrations

5. `npx sequelize-cli db:migrate`

- untuk melakukan migrations
- agar table di buat

6. `npx sequelize-cli migration:generate --name addColumnsToTable`

- untuk menambahkan kolom ke table
