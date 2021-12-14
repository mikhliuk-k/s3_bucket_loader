FROM ruby:3.0.3

COPY . /app
WORKDIR /app
RUN bundle install

CMD rails s -b 0.0.0.0