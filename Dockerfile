FROM ruby:3.0.3

COPY . /app
WORKDIR /app
RUN bundle install

EXPOSE 3000

CMD rails s -b 0.0.0.0