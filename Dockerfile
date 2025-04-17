# Gunakan image resmi Node.js versi LTS (Long Term Support)
FROM node:22.12.0

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json (jika ada) ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file dari project ke working directory di dalam container
COPY . .

# Expose port yang digunakan oleh aplikasi (misal: 5000)
EXPOSE 5003

# Tentukan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
