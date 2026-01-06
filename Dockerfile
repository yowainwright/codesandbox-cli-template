FROM oven/bun:latest

RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    golang-go \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

# Test with: docker build -t csb-test . && docker run -it csb-test
# Then run: bun run scripts/setup/index.ts --test
