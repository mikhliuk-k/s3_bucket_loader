# README

This app allow you to load files into GCP buckets.

## Usage
To use this application you should get the master.key file.
Just letter me: mikhliuk.k@gmail.com.

```bash
# Simple run just for loading files
$ docker run --rm -p 3000:3000 -v <path_to_master_key>:/app/config/master.key mikhliukk/s3_bucket_loader:latest
$ open 127.0.0.1:3000 
```
```bash
# Or you can make this with docker-compose
$ git clone https://github.com/mikhliuk-k/s3_bucket_loader.git
$ cd s3_bucket_laoder
$ cp <path_to_master_key> config/master.key
$ docker-compose up
$ open 127.0.0.1:3000 
```
