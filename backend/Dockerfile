FROM rstudio/plumber
RUN mkdir /backendapp
COPY . /backendapp
WORKDIR /backendapp

EXPOSE 8080
ENTRYPOINT ["R", "-e", "r = plumber::plumb('/backendapp/api.R'); r$run(port = 8080, host = '0.0.0.0')"]
# ENTRYPOINT ["Rscript", "-e","source("/backendapp/api2.R")"]