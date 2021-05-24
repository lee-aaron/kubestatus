FROM golang:latest

WORKDIR /app

COPY ./go.mod .

RUN go mod download

COPY . .
EXPOSE 8000
CMD ["go", "run", "main.go"]