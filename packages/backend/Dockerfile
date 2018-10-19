FROM golang:1.9-alpine as base
ENV GOBIN /go/bin
ARG HOST

RUN apk add --no-cache git 

RUN mkdir /go/src/app
ADD . /go/src/app
WORKDIR /go/src/app

RUN go get -u github.com/golang/dep/...
RUN dep ensure
RUN CGO_ENABLED=0 go build -ldflags "-s -w" -o main


FROM scratch
COPY --from=base /go/src/app/main /netlify-cms-backend
CMD ["/netlify-cms-backend"]