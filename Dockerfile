FROM ruby:3.0.3

COPY . /app
WORKDIR /app

RUN bundle install && bundle exec rails db:migrate

CMD bundle exec rails s -b 0.0.0.0