FROM alpine:3.7 as build

RUN apk --update add curl bash
WORKDIR /usr/src

ENV PORT 3000
EXPOSE 3000

ENV NETLIFY_CMS_BACKEND_VERSION 1.0.0
ENV NETLIFY_CMS_BACKEND https://github.com/c0b41/netlify-cms-oauth-backend/releases/download/v${NETLIFY_CMS_BACKEND_VERSION}/netlify-cms-oauth-backend_linux_amd64
RUN curl -fsSL ${NETLIFY_CMS_BACKEND} -o netlify-cms-backend

#CMD ["./netlify-cms-backend"]